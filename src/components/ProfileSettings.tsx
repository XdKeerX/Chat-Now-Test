import React, { useState, useEffect } from 'react'
import { User } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'
import defaultAvatar from '../assets/default-avatar.png'

interface UserProfile {
  username: string;
  photoURL: string;
  bio?: string;
  lastSeen?: any;
  isOnline?: boolean;
  banned?: boolean;
  timeoutUntil?: any;
}

interface ProfileSettingsProps {
  user: User;
  onUpdate?: () => void;
}

export default function ProfileSettings({ user, onUpdate }: ProfileSettingsProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [username, setUsername] = useState('')
  const [bio, setBio] = useState('')
  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    loadProfile()
  }, [user.uid])

  async function loadProfile() {
    try {
      const docRef = doc(db, 'users', user.uid)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        const data = docSnap.data() as UserProfile
        setProfile(data)
        setUsername(data.username || '')
        setBio(data.bio || '')
      }
      setLoading(false)
    } catch (err: any) {
      setError(err.message)
      setLoading(false)
    }
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image must be less than 5MB')
        return
      }
      if (!file.type.startsWith('image/')) {
        setError('File must be an image')
        return
      }
      setPhotoFile(file)
      setPreview(URL.createObjectURL(file))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      let photoURL = profile?.photoURL || defaultAvatar

      if (photoFile) {
        const photoRef = ref(storage, `profile-photos/${user.uid}`)
        await uploadBytes(photoRef, photoFile)
        photoURL = await getDownloadURL(photoRef)
      }

      const userRef = doc(db, 'users', user.uid)
      await setDoc(userRef, {
        username: username.trim(),
        photoURL,
        bio: bio.trim(),
        updatedAt: new Date(),
        ...(profile || {})
      }, { merge: true })

      onUpdate?.()
      setError('Profile updated successfully!')
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="card max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Profile Settings</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Profile Picture */}
        <div className="flex items-center space-x-6">
          <div className="relative">
            <img
              src={preview || profile?.photoURL || defaultAvatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-slate-200"
            />
            <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoChange}
              />
            </label>
          </div>
          
          <div>
            <h3 className="font-medium">{user.email}</h3>
            <p className="text-sm text-slate-500">
              JPG, PNG, GIF (max. 5MB)
            </p>
          </div>
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input"
            placeholder="Choose a unique username"
            required
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Bio
          </label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="textarea"
            placeholder="Tell us about yourself..."
          />
        </div>

        {error && (
          <div className={`p-3 rounded-lg ${
            error.includes('success')
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}>
            {error}
          </div>
        )}

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </div>
  )
}