import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAuOBKoOwNokkWE2Lm5avG0IvEzubltC4o",
  authDomain: "fir-auth-56098.firebaseapp.com",
  projectId: "fir-auth-56098",
  storageBucket: "fir-auth-56098.firebasestorage.app",
  messagingSenderId: "1000968325814",
  appId: "1:1000968325814:web:023a63383860099c4ab417",
  measurementId: "G-RPRZWWVCZV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);