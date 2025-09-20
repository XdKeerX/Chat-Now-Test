# Firebase Chat & Polls

This starter app uses React + Vite + Firebase (Auth + Firestore) and Tailwind CSS.

Quick start

1. Copy `.env.example` to `.env` and fill in your Firebase config.
2. Run `npm install` then `npm run dev`.
3. Open the app and create an account.

Features implemented:
- Email/password auth with Firebase Authentication
- Real-time chat stored in Firestore `messages` collection
- Polls stored in `polls` with subcollection `votes` to allow one vote per user
- Monthly leader poll in `leader_polls` collection
- Tailwind CSS responsive layout (chat left, polls right on desktop)

Notes & next steps
- You'll need to set Firestore rules appropriate to your app. For prototyping, open rules are simplest but insecure.
- Voice/Video is a stub; implement WebRTC signaling using Firestore or RTDB if you want.
