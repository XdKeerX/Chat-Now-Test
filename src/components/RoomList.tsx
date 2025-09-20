import React, { useState, useEffect } from 'react'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where
} from 'firebase/firestore'
import { db, createRoom, Room, joinRoom, leaveRoom } from '../firebase'
import { User } from 'firebase/auth'

interface RoomListProps {
  user: User
  selectedRoom: string | null
  onSelectRoom: (roomId: string) => void
}

export default function RoomList({ user, selectedRoom, onSelectRoom }: RoomListProps) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [isCreating, setIsCreating] = useState(false)
  const [newRoomName, setNewRoomName] = useState('')
  const [newRoomDesc, setNewRoomDesc] = useState('')

  useEffect(() => {
    // Get public rooms and rooms user is a member of
    const q = query(
      collection(db, 'rooms'),
      where('type', '==', 'public'),
      orderBy('createdAt', 'desc')
    )

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const roomList: Room[] = []
      snapshot.forEach((doc) => {
        const room = doc.data() as Room
        if (room.type === 'public' || room.members.includes(user.uid)) {
          roomList.push(room)
        }
      })
      setRooms(roomList)
    })

    return () => unsubscribe()
  }, [user.uid])

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newRoomName.trim()) return

    try {
      const room = await createRoom({
        name: newRoomName.trim(),
        description: newRoomDesc.trim(),
        type: 'public',
        createdBy: user.uid
      })

      setNewRoomName('')
      setNewRoomDesc('')
      setIsCreating(false)
      onSelectRoom(room.id)
    } catch (error) {
      console.error('Error creating room:', error)
    }
  }

  const handleJoinRoom = async (roomId: string) => {
    try {
      await joinRoom(roomId, user.uid)
      onSelectRoom(roomId)
    } catch (error) {
      console.error('Error joining room:', error)
    }
  }

  const handleLeaveRoom = async (roomId: string) => {
    try {
      await leaveRoom(roomId, user.uid)
      if (selectedRoom === roomId) {
        onSelectRoom('')
      }
    } catch (error) {
      console.error('Error leaving room:', error)
    }
  }

  return (
    <div className="bg-gray-900 w-64 h-full overflow-y-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">Rooms</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
        >
          + New
        </button>
      </div>

      {isCreating && (
        <form onSubmit={handleCreateRoom} className="mb-4 space-y-2">
          <input
            type="text"
            value={newRoomName}
            onChange={(e) => setNewRoomName(e.target.value)}
            placeholder="Room name"
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <textarea
            value={newRoomDesc}
            onChange={(e) => setNewRoomDesc(e.target.value)}
            placeholder="Description"
            className="w-full p-2 rounded bg-gray-800 text-white h-20"
          />
          <div className="flex space-x-2">
            <button
              type="submit"
              className="flex-1 p-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Create
            </button>
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="flex-1 p-2 bg-gray-700 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-2">
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`p-3 rounded-lg cursor-pointer transition-colors ${
              selectedRoom === room.id
                ? 'bg-blue-600'
                : 'bg-gray-800 hover:bg-gray-700'
            }`}
            onClick={() => onSelectRoom(room.id)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-white">{room.name}</h3>
                <p className="text-sm text-gray-400">{room.description}</p>
              </div>
              {room.members.includes(user.uid) && room.createdBy !== user.uid && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLeaveRoom(room.id)
                  }}
                  className="text-sm text-red-400 hover:text-red-300"
                >
                  Leave
                </button>
              )}
              {!room.members.includes(user.uid) && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleJoinRoom(room.id)
                  }}
                  className="text-sm text-green-400 hover:text-green-300"
                >
                  Join
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}