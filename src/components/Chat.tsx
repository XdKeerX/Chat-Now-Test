import React, { useEffect, useState, useRef } from 'react'
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  addDoc,
  limit,
  doc,
  getDoc,
  Timestamp
} from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage, now, auth } from '../firebase'
import { User } from 'firebase/auth'

interface Message {
  id: string
  text: string
  sender: string
  senderName: string
  timestamp: Timestamp
  roomId: string
  fileURL?: string
  fileType?: string
}

interface ChatProps {
  user: User
}

export default function Chat({ user }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!db) return

    const q = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'desc'),
      limit(50)
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newMessages: Message[] = []
      snapshot.forEach((doc) => {
        newMessages.push({ id: doc.id, ...doc.data() } as Message)
      })
      setMessages(newMessages.reverse())
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }), 100)
    })

    return () => unsubscribe()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() && !file) return
    if (!db || !storage) return

    try {
      let fileURL = ''
      let fileType = ''

      if (file) {
        setIsUploading(true)
        const storageRef = ref(storage, `files/${file.name}`)
        await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(storageRef)
        fileType = file.type
      }

      await addDoc(collection(db, 'messages'), {
        text: newMessage.trim(),
        sender: user.uid,
        senderName: user.displayName || user.email?.split('@')[0],
        timestamp: now(),
        fileURL,
        fileType
      })

      setNewMessage('')
      setFile(null)
      setIsUploading(false)
    } catch (error) {
      console.error('Error sending message:', error)
      setIsUploading(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="flex flex-col h-[70vh]">
      <div className="bg-gray-800 p-4">
        <h2 className="text-xl font-bold text-white">Chat</h2>
      </div>
      
      <div ref={messagesEndRef} className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === user.uid
                ? 'justify-end'
                : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === user.uid
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              <div className="text-sm opacity-75 mb-1">
                {message.senderName}
              </div>
              {message.text && <p>{message.text}</p>}
              {message.fileURL && (
                message.fileType?.startsWith('image/') ? (
                  <img
                    src={message.fileURL}
                    alt="Uploaded content"
                    className="max-w-full rounded-lg mt-2"
                  />
                ) : (
                  <a
                    href={message.fileURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 underline"
                  >
                    Download File
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-lg px-4 py-2 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isUploading}
          />
          <label className="cursor-pointer">
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              disabled={isUploading}
            />
            <div className="p-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600">
              {file ? '📎 Selected' : '📎'}
            </div>
          </label>
          <button
            type="submit"
            disabled={isUploading || (!newMessage.trim() && !file)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isUploading ? 'Uploading...' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  )
}
