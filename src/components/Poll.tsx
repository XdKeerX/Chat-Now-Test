import React, { useEffect, useState } from 'react'
import { db, now } from '../firebase'
import {
  collection,
  addDoc,
  doc,
  onSnapshot,
  setDoc,
  query,
  where,
  orderBy,
  limit,
  deleteDoc,
  Timestamp
} from 'firebase/firestore'
import { User } from 'firebase/auth'

interface Poll {
  id: string
  question: string
  choices: string[]
  createdAt: Timestamp
  admin: string
  expiresAt?: Timestamp
  isLeaderPoll?: boolean
}

interface PollProps {
  user: User
  isLeaderPoll?: boolean
}

export default function Poll({ user, isLeaderPoll = false }: PollProps) {
  const [polls, setPolls] = useState<Poll[]>([])
  const [question, setQuestion] = useState('')
  const [choicesText, setChoicesText] = useState('')
  const [duration, setDuration] = useState('1') // Duration in hours

  useEffect(() => {
    if (!db) return

    const q = query(
      collection(db, 'polls'),
      where('isLeaderPoll', '==', isLeaderPoll),
      orderBy('createdAt', 'desc'),
      limit(5)
    )

    return onSnapshot(q, snap => {
      const currentTime = Timestamp.now()
      const activePolls = snap.docs
        .map(d => {
          const data = d.data() as Poll
          return { ...data, id: d.id }
        })
        .filter(p => !p.expiresAt || p.expiresAt.toMillis() > currentTime.toMillis())
      setPolls(activePolls)
    })
  }, [isLeaderPoll])

  async function createPoll(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!db) return

    const choices = choicesText.split('\n').map(s => s.trim()).filter(Boolean)
    if (!question.trim() || choices.length < 2) return

    const hours = parseInt(duration)
    const expiresAt = new Date()
    expiresAt.setHours(expiresAt.getHours() + hours)

    const pollData = {
      question: question.trim(),
      choices,
      createdAt: now(),
      admin: user.uid,
      isLeaderPoll,
      expiresAt: Timestamp.fromDate(expiresAt)
    }

    await addDoc(collection(db, 'polls'), pollData)
    setQuestion('')
    setChoicesText('')
    setDuration('1')
  }

  async function deletePoll(pollId: string) {
    if (!db) return
    if (window.confirm('Are you sure you want to delete this poll?')) {
      await deleteDoc(doc(db, 'polls', pollId))
    }
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <h3 className="text-xl font-semibold mb-4">
        {isLeaderPoll ? 'Leader Election' : 'Polls'}
      </h3>
      
      <form onSubmit={createPoll} className="space-y-3 mb-6">
        <div>
          <input
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder={isLeaderPoll ? "Who should be the leader?" : "Question"}
            className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          />
        </div>
        
        <div>
          <textarea
            value={choicesText}
            onChange={e => setChoicesText(e.target.value)}
            placeholder="One choice per line"
            rows={4}
            className="w-full p-3 bg-gray-700 rounded-lg text-white placeholder-gray-400"
          />
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <select
              value={duration}
              onChange={e => setDuration(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg text-white"
            >
              <option value="1">1 hour</option>
              <option value="2">2 hours</option>
              <option value="4">4 hours</option>
              <option value="8">8 hours</option>
              <option value="24">24 hours</option>
            </select>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500"
          >
            Create Poll
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {polls.map(poll => (
          <PollItem
            key={poll.id}
            poll={poll}
            user={user}
            onDelete={poll.admin === user.uid ? deletePoll : undefined}
          />
        ))}
        {polls.length === 0 && (
          <div className="text-center text-gray-400 py-4">
            No active polls
          </div>
        )}
      </div>
    </div>
  )
}

interface PollItemProps {
  poll: Poll
  user: User
  onDelete?: (pollId: string) => void
}

function PollItem({ poll, user, onDelete }: PollItemProps) {
  const [votes, setVotes] = useState<Record<string, number>>({})
  const [userVote, setUserVote] = useState<string | null>(null)
  const [totalVotes, setTotalVotes] = useState(0)

  useEffect(() => {
    if (!db) return

    const votesCol = collection(db, 'polls', poll.id, 'votes')
    return onSnapshot(votesCol, snap => {
      const counts: Record<string, number> = {}
      let uv: string | null = null
      let total = 0

      snap.docs.forEach(d => {
        const data = d.data()
        const choice = data.choice as string
        counts[choice] = (counts[choice] || 0) + 1
        total++
        if (data.uid === user.uid) uv = data.choice
      })

      setVotes(counts)
      setTotalVotes(total)
      setUserVote(uv)
    })
  }, [poll.id, user.uid])

  async function vote(choice: string) {
    if (!db) return
    if (userVote) return
    const voteRef = doc(db, 'polls', poll.id, 'votes', user.uid)
    await setDoc(voteRef, {
      uid: user.uid,
      choice,
      createdAt: now(),
      email: user.email || null
    })
  }

  const timeLeft = poll.expiresAt
    ? new Date(poll.expiresAt.toMillis()).getTime() - Date.now()
    : 0

  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-lg font-medium">{poll.question}</h4>
        {onDelete && (
          <button
            onClick={() => onDelete(poll.id)}
            className="text-red-400 hover:text-red-300"
          >
            Delete
          </button>
        )}
      </div>

      <div className="space-y-3">
        {poll.choices.map(choice => {
          const voteCount = votes[choice] || 0
          const percentage = totalVotes > 0 ? (voteCount / totalVotes) * 100 : 0

          return (
            <div key={choice}>
              <div className="flex justify-between items-center mb-1">
                <span>{choice}</span>
                <span className="text-sm text-gray-400">
                  {voteCount} votes ({percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="relative h-2 bg-gray-600 rounded-full">
                <div
                  className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              {!userVote && (
                <button
                  onClick={() => vote(choice)}
                  className="mt-1 text-sm text-blue-400 hover:text-blue-300"
                >
                  Vote
                </button>
              )}
              {userVote === choice && (
                <span className="mt-1 text-sm text-green-400">Your vote</span>
              )}
            </div>
          )
        })}
      </div>

      {poll.expiresAt && (
        <div className="mt-4 text-sm text-gray-400">
          {timeLeft > 0
            ? `Expires in ${Math.ceil(timeLeft / 1000 / 60)} minutes`
            : 'Poll has ended'}
        </div>
      )}
    </div>
  )
}
