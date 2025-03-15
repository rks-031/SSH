import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBTK0HdRWDRMnhtO9iOt9EJ1CF5QbM6kJA",
    authDomain: "rks3107.firebaseapp.com",
    projectId: "rks3107",
    storageBucket: "rks3107.firebasestorage.app",
    messagingSenderId: "1010239965902",
    appId: "1:1010239965902:web:b5b24cc89697cc9b905e9f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, signInWithPopup };
