// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp, getApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDT9hrTIOSNHFHBzO3a_1ezkHvAt8NHPjE",
  authDomain: "prepwise-7fad3.firebaseapp.com",
  projectId: "prepwise-7fad3",
  storageBucket: "prepwise-7fad3.firebasestorage.app",
  messagingSenderId: "877259930973",
  appId: "1:877259930973:web:7f2c3ee4b43bf00f497cb4",
  measurementId: "G-T7WRTDGQS2"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);