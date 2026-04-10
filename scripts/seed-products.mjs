import 'dotenv/config';
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, writeBatch } from 'firebase/firestore';

import { PRODUCTS } from '../src/data/products.js';

function requiredEnv(name) {
  const v = process.env[name];
  if (!v) throw new Error(`Falta la variable ${name} en .env`);
  return v;
}

const firebaseConfig = {
  apiKey: requiredEnv('VITE_FIREBASE_API_KEY'),
  authDomain: requiredEnv('VITE_FIREBASE_AUTH_DOMAIN'),
  projectId: requiredEnv('VITE_FIREBASE_PROJECT_ID'),
  storageBucket: requiredEnv('VITE_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: requiredEnv('VITE_FIREBASE_MESSAGING_SENDER_ID'),
  appId: requiredEnv('VITE_FIREBASE_APP_ID'),
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const batch = writeBatch(db);

for (const p of PRODUCTS) {
  const id = String(p.slug);
  const ref = doc(db, 'products', id);
  batch.set(ref, {
    name: p.name,
    slug: p.slug,
    price: p.price,
    category: p.category,
    stock: p.stock,
    description: p.description,
    img: p.img,
  });
}

await batch.commit();

console.log(`OK: ${PRODUCTS.length} productos cargados en products (id = slug).`);

