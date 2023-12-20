import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCg2l4RbpSNmA81GqMpcsIaGKAgDHEcn7s",
  authDomain: "resultsback-f73be.firebaseapp.com",
  projectId: "resultsback-f73be",
  storageBucket: "resultsback-f73be.appspot.com",
  messagingSenderId: "158100021725",
  appId: "1:158100021725:web:1cf6d21a93994cdfc85634"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()