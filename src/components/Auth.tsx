import React, { useState, useEffect } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [initError, setInitError] = useState<string | null>(null)

  useEffect(() => {
    // Check if Firebase is initialized correctly
    if (!auth) {
      setInitError('Firebase Authentication is not initialized properly. Check your configuration.')
      return
    }

    try {
      // Test Firebase configuration
      auth.languageCode = 'en'
    } catch (error: any) {
      setInitError('Firebase configuration error: ' + error.message)
    }
  }, [])

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      if (!email.trim() || !password.trim()) {
        throw new Error('Email and password are required')
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters')
      }

      if (!auth) {
        throw new Error('Firebase Authentication is not initialized.')
      }

      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
    } catch (err: any) {
      let message = err.message
      if (message.includes('auth/invalid-email')) {
        message = 'Invalid email address'
      } else if (message.includes('auth/wrong-password')) {
        message = 'Incorrect password'
      } else if (message.includes('auth/email-already-in-use')) {
        message = 'Email is already registered'
      } else if (message.includes('auth/user-not-found')) {
        message = 'No account found with this email'
      }
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  async function signInWithGoogle() {
    setError(null)
    setIsLoading(true)
    try {
      if (!auth) {
        throw new Error('Firebase Authentication is not initialized.')
      }

      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (err: any) {
      setError('Failed to sign in with Google: ' + err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (initError) {
    return (
      <div className="p-6 bg-red-100 rounded shadow border-2 border-red-400">
        <h2 className="text-xl font-semibold mb-4 text-red-700">Configuration Error</h2>
        <p className="text-red-600">{initError}</p>
        <p className="mt-4 text-red-500">Please check your Firebase configuration in .env file</p>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-800 rounded-lg shadow-xl text-white">
      <h2 className="text-2xl font-bold mb-6">{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
      
      <button
        onClick={signInWithGoogle}
        className="w-full mb-4 px-4 py-3 bg-white text-gray-800 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
        disabled={isLoading}
      >
        <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
        <span>Continue with Google</span>
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-gray-800 text-gray-400">Or continue with email</span>
        </div>
      </div>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email Address</label>
          <input
            type="email"
            className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
            {error}
          </div>
        )}

        <button
          type="submit"
          className={`w-full p-3 rounded-lg font-semibold ${
            isLoading
              ? 'bg-blue-600/50 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-500'
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Please wait...' : isSignUp ? 'Create Account' : 'Sign In'}
        </button>

        <button
          type="button"
          className="w-full text-sm text-gray-400 hover:text-white"
          onClick={() => setIsSignUp((s) => !s)}
          disabled={isLoading}
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </button>
      </form>
    </div>
  )
}
