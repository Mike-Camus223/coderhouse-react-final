import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { getDb, isFirebaseConfigured } from '../firebase/firebase.js';

export async function createOrder({ buyer, items, total }) {
  if (!isFirebaseConfigured()) {
    return { id: `MOCK-${Date.now()}` };
  }

  const db = getDb();
  if (!db) return { id: `MOCK-${Date.now()}` };

  const docRef = await addDoc(collection(db, 'orders'), {
    buyer,
    items,
    total,
    createdAt: serverTimestamp(),
  });

  return { id: docRef.id };
}

