import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db, firebaseInitError } from './firebase'
import Auth from './components/Auth'
import Chat from './components/Chat'
import Poll from './components/Poll'
import VideoCall from './components/VideoCall'
import AdminPanel from './components/AdminPanel'
import RedeemCodeModal from './components/RedeemCodeModal'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function App() {
  // If Firebase failed to initialize, show error (useful early exit)
  if (firebaseInitError) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="max-w-xl p-6 bg-red-900/80 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Configuration error</h2>
          <p className="mb-4">Firebase failed to initialize. Check the .env file and console for details.</p>
          <pre className="text-sm bg-black/30 p-3 rounded">{String(firebaseInitError)}</pre>
        </div>
      </div>
    )
  }

  const [user, loading] = useAuthState(auth as any)
  const [isAdmin, setIsAdmin] = useState(false)
  const [showRedeemModal, setShowRedeemModal] = useState(false)
  const [activeTab, setActiveTab] = useState<'chat' | 'video' | 'admin'>('chat')

  useEffect(() => {
    if (!user) return
    if (!db) return

    // Check if user is admin
    const adminsCol = collection(db, 'admins')
    const q = query(adminsCol, where('uid', '==', user.uid))
    const unsub = onSnapshot(q, (snapshot) => {
      setIsAdmin(!snapshot.empty)
    })
    return unsub
  }, [user])

  if (loading) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  )

  // If Firebase failed to initialize, show a friendly error and stop rendering children
  if (firebaseInitError) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="max-w-xl p-6 bg-red-900/80 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Configuration error</h2>
          <p className="mb-4">Firebase failed to initialize. Check the .env file and console for details.</p>
          <pre className="text-sm bg-black/30 p-3 rounded">{String(firebaseInitError)}</pre>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {showRedeemModal && user && (
        <RedeemCodeModal
          user={user}
          onSuccess={() => {
            setShowRedeemModal(false)
            setIsAdmin(true)
          }}
          onClose={() => setShowRedeemModal(false)}
        />
      )}

      {!user ? (
        <div className="max-w-md mx-auto p-6 pt-12">
          <Auth />
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          {/* Navigation */}
          <nav className="bg-gray-800 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('chat')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'chat'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Chat & Polls
                </button>
                <button
                  onClick={() => setActiveTab('video')}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    activeTab === 'video'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  Video Call
                </button>
                {isAdmin && (
                  <button
                    onClick={() => setActiveTab('admin')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      activeTab === 'admin'
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    Admin Panel
                  </button>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">{user.email}</span>
                {!isAdmin && (
                  <button
                    onClick={() => setShowRedeemModal(true)}
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
                  >
                    Become Admin
                  </button>
                )}
                <button
                  onClick={() => auth?.signOut()}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="flex-1 flex overflow-hidden">
            {activeTab === 'chat' && (
              <div className="flex-1 flex overflow-hidden">
                <div className="flex-1 flex">
                  <div className="flex-1 flex flex-col">
                    <Chat user={user} />
                  </div>
                  <div className="w-80 p-4 space-y-4 overflow-y-auto">
                    <Poll user={user} />
                    <Poll user={user} isLeaderPoll />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'video' && (
              <div className="flex-1 p-4">
                <VideoCall user={user} />
              </div>
            )}

            {activeTab === 'admin' && isAdmin && (
              <div className="flex-1 p-4">
                <AdminPanel user={user} isAdmin={isAdmin} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
