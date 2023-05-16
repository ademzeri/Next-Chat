import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA_6HvyuRssGgZqgdcc6HdDW_SPtyDSpD0",
  authDomain: "next-chat-d6ea2.firebaseapp.com",
  projectId: "next-chat-d6ea2",
  storageBucket: "next-chat-d6ea2.appspot.com",
  messagingSenderId: "239837948156",
  appId: "1:239837948156:web:d40d7d92cf29417abd8f79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);