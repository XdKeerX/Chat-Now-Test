import React, { useEffect, useRef, useState } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc, onSnapshot, deleteDoc, query, where } from 'firebase/firestore';
import { User } from 'firebase/auth';

const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302'],
    },
  ],
};

// Simplify VideoCall component to focus on core functionality
export default function VideoCall({ user }: { user: User }) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [inCall, setInCall] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);

  // Initialize video call
  async function startCall() {
    if (!db) {
      console.error('Firestore is not initialized.');
      return;
    }

    try {
      // Check if mediaDevices is available
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Media devices not available in this browser');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      
      setLocalStream(stream);
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setInCall(true);
    } catch (err) {
      console.error('Error starting call:', err);
      alert('Failed to access camera and microphone. Please make sure you have granted permission and have the devices connected.');
    }
  }

  // End call and cleanup
  async function endCall() {
    if (!db) {
      console.error('Firestore is not initialized.');
      return;
    }

    localStream?.getTracks().forEach((track) => track.stop());
    setLocalStream(null);
    setInCall(false);
  }

  return (
    <div className="mt-4 bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Video Call</h2>

      {!inCall ? (
        <button
          onClick={startCall}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Start Call
        </button>
      ) : (
        <div className="space-y-4">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full rounded-lg bg-black"
          />
          <button
            onClick={endCall}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            End Call
          </button>
        </div>
      )}
    </div>
  );
}