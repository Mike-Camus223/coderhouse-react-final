import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

function getFirebaseConfig() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
  const appId = import.meta.env.VITE_FIREBASE_APP_ID;

  const hasConfig =
    apiKey &&
    authDomain &&
    projectId &&
    storageBucket &&
    messagingSenderId &&
    appId;

  if (!hasConfig) return null;

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
}

export function isFirebaseConfigured() {
  return Boolean(getFirebaseConfig());
}

export function getDb() {
  const config = getFirebaseConfig();
  if (!config) return null;

  const app = getApps().length ? getApps()[0] : initializeApp(config);
  return getFirestore(app);
}

