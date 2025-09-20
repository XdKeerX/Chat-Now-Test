import React, { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { db, now } from '../firebase'
import { collection, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, where, getDocs, DocumentData } from 'firebase/firestore'

interface Post {
  id: string;
  content: string;
  createdAt: any;
  createdBy: string;
  authorEmail: string;
  type: 'announcement' | 'post';
}

interface AdminPanelProps {
  user: User;
  isAdmin: boolean;
}

export default function AdminPanel({ user, isAdmin }: AdminPanelProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState('')
  const [isAnnouncement, setIsAnnouncement] = useState(false)
  const [redeemCode, setRedeemCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [chatEnabled, setChatEnabled] = useState(true)
  const [timeoutUserId, setTimeoutUserId] = useState('')

  useEffect(() => {
    if (!db) {
      setError('Database not initialized')
      return
    }

    // Listen for posts
    const postsQuery = query(
      collection(db, 'posts'),
      orderBy('createdAt', 'desc')
    )
    const unsubPosts = onSnapshot(postsQuery, (snapshot) => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Post)))
    })

    // Listen for chat status
    const chatStatusQuery = query(
      collection(db, 'chat-status'),
      orderBy('updatedAt', 'desc'),
      where('updatedAt', '>', now())
    )
    const unsubChatStatus = onSnapshot(chatStatusQuery, (snapshot) => {
      if (!snapshot.empty) {
        const latestStatus = snapshot.docs[0].data()
        setChatEnabled(latestStatus.enabled)
      }
    })

    return () => {
      unsubPosts()
      unsubChatStatus()
    }
  }, [])

  async function submitPost(e: React.FormEvent) {
    e.preventDefault()
    if (!newPost.trim()) return
    if (!db) {
      setError('Database not initialized')
      return
    }

    try {
      await addDoc(collection(db, 'posts'), {
        content: newPost.trim(),
        createdAt: now(),
        createdBy: user.uid,
        authorEmail: user.email,
        type: isAnnouncement ? 'announcement' : 'post'
      })
      setNewPost('')
      setIsAnnouncement(false)
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function deletePost(postId: string) {
    if (!db) {
      setError('Database not initialized')
      return
    }
    try {
      await deleteDoc(doc(db, 'posts', postId))
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function clearChat() {
    if (!isAdmin) return
    if (!db) {
      setError('Database not initialized')
      return
    }
    try {
      const msgsSnapshot = await getDocs(collection(db, 'messages'))
      msgsSnapshot.docs.forEach(async (msgDoc) => {
        const msg = { id: msgDoc.id, ...msgDoc.data() }
        if (msg.id && db) {
          await deleteDoc(doc(db, 'messages', msg.id))
        }
      })
      alert('Chat cleared successfully!')
    } catch (err: any) {
      setError(err.message)
      alert('Error clearing chat')
    }
  }

  async function toggleChat() {
    if (!isAdmin || !db) {
      setError('Database not initialized')
      return
    }

    try {
      await addDoc(collection(db, 'chat-status'), {
        enabled: !chatEnabled,
        updatedAt: now(),
        updatedBy: user.uid
      })
      setChatEnabled(!chatEnabled)
      alert(`Chat has been ${chatEnabled ? 'disabled' : 'enabled'}`)
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function timeoutUser() {
    if (!isAdmin || !timeoutUserId.trim() || !db) return

    try {
      await addDoc(collection(db, 'timeouts'), {
        userId: timeoutUserId,
        createdAt: now(),
        createdBy: user.uid,
        expiresAt: new Date(Date.now() + 5 * 60 * 1000) // 5 minutes timeout
      })
      alert('User has been timed out for 5 minutes')
      setTimeoutUserId('')
    } catch (err: any) {
      setError(err.message)
    }
  }

  async function redeemAdminCode() {
    if (!db) {
      setError('Database not initialized')
      return
    }
    try {
      const codesRef = collection(db, 'admin-codes')
      const q = query(codesRef, where('code', '==', redeemCode))
      const snapshot = await getDocs(q)
      
      if (snapshot.empty) {
        setError('Invalid code')
        return
      }

      await addDoc(collection(db, 'admins'), {
        uid: user.uid,
        email: user.email,
        grantedAt: now()
      })

      await deleteDoc(snapshot.docs[0].ref) // Use code only once
      setRedeemCode('')
      setError('Admin access granted!')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <div className="space-y-6">
      {/* Admin Actions */}
      {isAdmin && (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="material-symbols-rounded">admin_panel_settings</span>
            Admin Panel
          </h3>
          <div className="space-y-4">
            {/* Chat Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={clearChat}
                className="flex items-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <span className="material-symbols-rounded">delete_sweep</span>
                Clear All Chat
              </button>
              <button
                onClick={toggleChat}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition-colors ${
                  chatEnabled 
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                <span className="material-symbols-rounded">
                  {chatEnabled ? 'toggle_off' : 'toggle_on'}
                </span>
                {chatEnabled ? 'Disable Chat' : 'Enable Chat'}
              </button>
            </div>

            {/* Timeout User */}
            <div className="space-y-2">
              <label htmlFor="timeoutUser" className="block">Timeout User (UID):</label>
              <div className="flex space-x-2">
                <input
                  id="timeoutUser"
                  type="text"
                  value={timeoutUserId}
                  onChange={(e) => setTimeoutUserId(e.target.value)}
                  placeholder="User UID"
                  className="flex-1 p-2 border rounded-lg"
                />
                <button
                  onClick={timeoutUser}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Timeout
                </button>
              </div>
            </div>
          </div>
          {error && (
            <div className="mt-4 text-sm text-red-600">{error}</div>
          )}
        </div>
      )}

      {/* Redeem Code (for non-admins) */}
      {!isAdmin && (
        <div className="bg-white rounded-lg shadow-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Redeem Admin Code</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              value={redeemCode}
              onChange={(e) => setRedeemCode(e.target.value)}
              placeholder="Enter admin code"
              className="flex-1 p-2 border rounded-lg"
            />
            <button
              onClick={redeemAdminCode}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Redeem
            </button>
          </div>
          {error && (
            <p className="mt-2 text-sm text-red-600">{error}</p>
          )}
        </div>
      )}

      {/* Posts/Announcements */}
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Posts & Announcements</h2>
        
        {/* Create Post Form */}
        <form onSubmit={submitPost} className="space-y-4 mb-6">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Write a post..."
            className="w-full p-2 border rounded-lg min-h-[100px]"
          />
          
          <div className="flex items-center space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isAnnouncement}
                onChange={(e) => setIsAnnouncement(e.target.checked)}
                className="rounded text-blue-600"
              />
              <span>Post as Announcement</span>
            </label>
            
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Post
            </button>
          </div>
        </form>

        {/* Posts List */}
        <div className="space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className={`p-4 rounded-lg ${
                post.type === 'announcement'
                  ? 'bg-yellow-50 border border-yellow-200'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    {post.authorEmail} • {new Date(post.createdAt?.toDate()).toLocaleString()}
                  </p>
                  <p className="whitespace-pre-wrap">{post.content}</p>
                </div>
                
                {(isAdmin || post.createdBy === user.uid) && (
                  <button
                    onClick={() => deletePost(post.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}