import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { CallableRequest } from 'firebase-functions/lib/common/providers/https';
import { FirestoreEvent } from 'firebase-functions/v2/firestore';

admin.initializeApp();

interface PromoteToAdminData {
  adminCode: string;
}

interface BanUserData {
  uid: string;
}

interface TimeoutUserData {
  uid: string;
  duration?: number;
}

// Promote to admin using code
export const promoteToAdmin = functions.https.onCall(
  async (request: CallableRequest<PromoteToAdminData>) => {
    const { adminCode } = request.data;

    // Check if user is authenticated
    if (!request.auth) {
      throw new functions.https.HttpsError(
        'unauthenticated',
        'Must be logged in to promote to admin.'
      );
    }

    // Verify admin code
    if (adminCode !== 'Ahmed') {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Invalid admin code.'
      );
    }

    try {
      // Set custom claim
      await admin.auth().setCustomUserClaims(request.auth.uid, { admin: true });

      // Add to admins collection
      await admin.firestore().collection('admins').doc(request.auth.uid).set({
        email: request.auth.token.email,
        promotedAt: admin.firestore.FieldValue.serverTimestamp()
      });

      return { success: true };
    } catch (error) {
      throw new functions.https.HttpsError(
        'internal',
        'Error promoting user to admin.'
      );
    }
  }
);

// Ban user
export const banUser = functions.https.onCall(
  async (request: CallableRequest<BanUserData>) => {
    const { uid } = request.data;

    if (!request.auth?.token?.admin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an admin to ban users.'
      );
    }

    try {
      await admin.firestore().collection('users').doc(uid).set({
        banned: true,
        bannedBy: request.auth.uid,
        bannedAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      return { success: true };
    } catch (error) {
      throw new functions.https.HttpsError('internal', 'Error banning user.');
    }
  }
);

// Timeout user
export const timeoutUser = functions.https.onCall(
  async (request: CallableRequest<TimeoutUserData>) => {
    const { uid, duration } = request.data;

    if (!request.auth?.token?.admin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an admin to timeout users.'
      );
    }

    const timeoutDuration = duration || 3600000; // Default 1 hour
    const timeoutUntil = new Date(Date.now() + timeoutDuration);

    try {
      await admin.firestore().collection('users').doc(uid).set({
        timeoutUntil,
        timeoutBy: request.auth.uid,
        timeoutAt: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });

      return { success: true };
    } catch (error) {
      throw new functions.https.HttpsError('internal', 'Error timing out user.');
    }
  }
);

// Clear chat
export const clearChat = functions.https.onCall(
  async (_request: CallableRequest<any>) => {
    if (!_request.auth?.token?.admin) {
      throw new functions.https.HttpsError(
        'permission-denied',
        'Must be an admin to clear chat.'
      );
    }

    try {
      const batch = admin.firestore().batch();
      const messages = await admin.firestore().collection('messages').get();

      messages.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      await batch.commit();
      return { success: true };
    } catch (error) {
      throw new functions.https.HttpsError('internal', 'Error clearing chat.');
    }
  }
);

// Delete file from Storage (helper for message deletions)
export const deleteFile = functions.firestore
  .onDocumentDeleted('messages/{messageId}', async (event: FirestoreEvent<admin.firestore.QueryDocumentSnapshot | undefined>) => {
    const snap = event.data;
    if (snap) {
      const data = snap.data();
      if (data?.fileURL) {
        try {
          const bucket = admin.storage().bucket();
          await bucket.file(data.fileURL).delete();
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      }
    }
  });