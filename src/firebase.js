// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRLfQVqLpRdBN9xHnEYdAUbMKiZH82v6M",
  authDomain: "chat-app-yff.firebaseapp.com",
  projectId: "chat-app-yff",
  storageBucket: "chat-app-yff.appspot.com",
  messagingSenderId: "128602256499",
  appId: "1:128602256499:web:d76936876ddb7c988f6606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);