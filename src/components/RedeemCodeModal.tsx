import React, { useState } from 'react'
import { User } from 'firebase/auth'
import { db, now } from '../firebase'
import { collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore'

interface RedeemCodeModalProps {
  user: User
  onSuccess: () => void
  onClose: () => void
}

export default function RedeemCodeModal({ user, onSuccess, onClose }: RedeemCodeModalProps) {
  const [redeemCode, setRedeemCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function redeemAdminCode() {
    if (!db || !redeemCode.trim()) {
      setError('Please enter a code')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const codesRef = collection(db, 'admin-codes')
      const q = query(codesRef, where('code', '==', redeemCode.trim()))
      const snapshot = await getDocs(q)
      
      if (snapshot.empty) {
        setError('Invalid code')
        return
      }

      // Add user to admins collection
      await addDoc(collection(db, 'admins'), {
        uid: user.uid,
        email: user.email,
        grantedAt: now()
      })

      // Delete the used code
      await deleteDoc(snapshot.docs[0].ref)
      
      // Clear form and notify parent
      setRedeemCode('')
      onSuccess()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 shadow-2xl">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Enter Admin Code</h3>
        
        <input
          type="text"
          value={redeemCode}
          onChange={(e) => setRedeemCode(e.target.value)}
          placeholder="Enter admin code"
          className="w-full p-3 border rounded-lg mb-4 text-gray-800"
          disabled={isLoading}
        />

        <div className="flex space-x-3">
          <button
            onClick={redeemAdminCode}
            disabled={isLoading}
            className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Redeeming...' : 'Redeem'}
          </button>
          <button
            onClick={onClose}
            disabled={isLoading}
            className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  )
}