import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { 
  getFirestore, 
  serverTimestamp,
  doc,
  setDoc,
  deleteDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  enableIndexedDbPersistence
} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import { getDatabase, onDisconnect, ref } from 'firebase/database'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL
}

// Initialize Firebase only if config is valid
function validateConfig(config: typeof firebaseConfig): boolean {
  return Object.values(config).every(value => 
    value !== undefined && 
    value !== null && 
    value !== '' && 
    !value.includes('YOUR_')
  )
}

// Try to initialize Firebase but don't throw — fail gracefully so the app can show a UI and helpful errors.
let app = null as any
export let firebaseInitError: any = null
try {
  if (!validateConfig(firebaseConfig)) {
    throw new Error('Firebase configuration is invalid. Please check your .env file.')
  }
  app = initializeApp(firebaseConfig)
} catch (err) {
  console.error('Firebase initialization failed:', err)
  firebaseInitError = err
}

// Initialize services (may be null if initialization failed)
export let auth: ReturnType<typeof getAuth> | null = null
export let db: ReturnType<typeof getFirestore> | null = null
export let storage: ReturnType<typeof getStorage> | null = null
export let functions: ReturnType<typeof getFunctions> | null = null
export const now = serverTimestamp

if (app) {
  auth = getAuth(app)
  db = getFirestore(app)
  storage = getStorage(app)
  functions = getFunctions(app)

  // Enable offline persistence where supported
  enableIndexedDbPersistence(db).catch((err) => {
    console.error('Firestore persistence error:', err)
    if (err.code === 'failed-precondition') {
      console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.')
    } else if (err.code === 'unimplemented') {
      console.warn('The current browser does not support persistence.')
    }
  })

  // Use emulators in development
  if (import.meta.env.DEV && functions) {
    try { connectFunctionsEmulator(functions, 'localhost', 5001) } catch (e) { console.warn(e) }
  }
} else {
  console.warn('Firebase not initialized — continuing without Firebase. Check console for details.')
}

// Ensure Firestore is non-null before making calls
if (!db) {
  throw new Error('Firestore is not initialized. Check your Firebase configuration.')
}

// Ensure Realtime Database is initialized
const database = getDatabase()

// Track user presence
if (auth && db) {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User presence ref
      const presenceRef = doc(db!, 'presence', user.uid)
      const userRef = doc(db!, 'users', user.uid)

      // Set initial online presence
      try {
        await setDoc(presenceRef, {
          online: true,
          lastSeen: now(),
          email: user.email
        })

        // Create or update user profile
        await setDoc(userRef, {
          email: user.email,
          displayName: user.displayName || user.email?.split('@')[0],
          photoURL: user.photoURL,
          createdAt: now(),
          lastSeen: now()
        }, { merge: true })

        // Remove presence when offline
        try {
          const presenceRefRTDB = ref(database, `presence/${user.uid}`);
          onDisconnect(presenceRefRTDB).remove();
        } catch (e) { console.warn('onDisconnect not supported in browser SDK emulator mode', e) }

        // Update last seen when tab closes
        window.addEventListener('beforeunload', async () => {
          try {
            await setDoc(userRef, { lastSeen: now() }, { merge: true })
            await deleteDoc(presenceRef)
          } catch (e) {
            console.warn('Error updating presence on unload', e)
          }
        })
      } catch (e) {
        console.error('Error updating presence/user profile:', e)
      }
    }
  })
}

// Room interfaces
export interface Room {
  id: string
  name: string
  description: string
  createdBy: string
  createdAt: any
  type: 'public' | 'private'
  members: string[]
  lastMessage?: {
    text: string
    timestamp: any
    sender: string
  }
}

export interface Message {
  id: string
  text: string
  sender: string
  senderName: string
  timestamp: any
  roomId: string
  fileURL?: string
  fileType?: string
}

// Room functions
export const createRoom = async (data: Omit<Room, 'id' | 'createdAt' | 'members'>) => {
  const roomRef = doc(collection(db, 'rooms'))
  const room: Room = {
    ...data,
    id: roomRef.id,
    createdAt: now(),
    members: [data.createdBy]
  }
  await setDoc(roomRef, room)
  return room
}

export const getRooms = async () => {
  const roomsRef = collection(db, 'rooms')
  const q = query(roomsRef, orderBy('createdAt', 'desc'))
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => doc.data() as Room)
}

export const getPublicRooms = async () => {
  const roomsRef = collection(db, 'rooms')
  const q = query(
    roomsRef,
    where('type', '==', 'public'),
    orderBy('createdAt', 'desc')
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => doc.data() as Room)
}

export const joinRoom = async (roomId: string, userId: string) => {
  const roomRef = doc(db!, 'rooms', roomId)
  await setDoc(roomRef, {
    members: [...(await getRoomMembers(roomId)), userId]
  }, { merge: true })
}

export const leaveRoom = async (roomId: string, userId: string) => {
  const roomRef = doc(db!, 'rooms', roomId)
  const members = await getRoomMembers(roomId)
  await setDoc(roomRef, {
    members: members.filter(id => id !== userId)
  }, { merge: true })
}

export const getRoomMembers = async (roomId: string): Promise<string[]> => {
  const roomRef = doc(db!, 'rooms', roomId)
  const roomSnap = await getDoc(roomRef)
  return roomSnap.exists() ? roomSnap.data()?.members || [] : []
}
