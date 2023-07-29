import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjYKCSfoxE2q3jj7r8plYRUtoTMtr9GZI",
  authDomain: "real-time-chat-applicati-c9ce2.firebaseapp.com",
  projectId: "real-time-chat-applicati-c9ce2",
  storageBucket: "real-time-chat-applicati-c9ce2.appspot.com",
  messagingSenderId: "11045861761",
  appId: "1:11045861761:web:82182e04d5355741a55080",
  measurementId: "G-550HZ6D018"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()