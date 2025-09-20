import React, { useEffect, useState } from 'react'
import { db, now } from '../firebase'
import { collection, query, where, onSnapshot, addDoc, orderBy } from 'firebase/firestore'
import { User } from 'firebase/auth'

function monthKey(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`
}

export default function LeaderPoll({ user }: { user: User }) {
  const [poll, setPoll] = useState<any | null>(null)
  const [votes, setVotes] = useState<Record<string, number>>({})
  const key = monthKey()

  useEffect(() => {
    const q = query(collection(db, 'leader_polls'), where('month', '==', key))
    return onSnapshot(q, snap => {
      if (snap.empty) {
        setPoll(null)
      } else {
        setPoll({ id: snap.docs[0].id, ...(snap.docs[0].data() as any) })
      }
    })
  }, [key])

  useEffect(() => {
    if (!poll) return
    const votesCol = collection(db, 'leader_polls', poll.id, 'votes')
    return onSnapshot(votesCol, snap => {
      const counts: Record<string, number> = {}
      snap.docs.forEach(d => {
        const c = (d.data() as any).choice
        counts[c] = (counts[c] || 0) + 1
      })
      setVotes(counts)
    })
  }, [poll?.id])

  async function create() {
    await addDoc(collection(db, 'leader_polls'), { month: key, createdAt: now() })
  }

  const winner = Object.entries(votes).sort((a, b) => b[1] - a[1])[0]

  return (
    <div className="mt-4 bg-white p-4 rounded shadow">
      <h3 className="font-semibold">Monthly Leader</h3>
      {!poll ? (
        <div className="mt-2">
          <div>No poll for {key} yet.</div>
          <button onClick={create} className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">Create Leader Poll</button>
        </div>
      ) : (
        <div className="mt-2">
          <div>Results:</div>
          <div className="mt-2 space-y-1">
            {Object.entries(votes).map(([name, count]) => (
              <div key={name} className={`flex justify-between ${winner && winner[0] === name ? 'font-bold text-emerald-600' : ''}`}>
                <div>{name}</div>
                <div>{count}</div>
              </div>
            ))}
          </div>
          {winner && <div className="mt-2 text-sm text-emerald-700">Leader: {winner[0]}</div>}
        </div>
      )}
    </div>
  )
}
