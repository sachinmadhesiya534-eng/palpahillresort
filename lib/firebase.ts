
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measuringId:process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Check if we are running on the client side and if keys exist
const isClient = typeof window !== "undefined";
const hasValidKeys = !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;

// Prevent initialization crashes during Next.js build or server pre-render steps
const app = !hasValidKeys && !isClient
  ? initializeApp({ apiKey: "mock-key", projectId: "mock-id" }) // Safe fallback for server compiling
  : (getApps().length > 0 ? getApp() : initializeApp(firebaseConfig));

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;