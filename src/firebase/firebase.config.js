// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: "solosphere-job-marketplace.firebaseapp.com",
  projectId: "solosphere-job-marketplace",
  storageBucket: "solosphere-job-marketplace.firebasestorage.app",
  messagingSenderId: "529792172752",
  appId: "1:529792172752:web:c1a51425a1922b873a54d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
