// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWzAjqcb2U0LiVN8mjKlo4T7wGlxS2kSk",
  authDomain: "leticia-namora-comigo.firebaseapp.com",
  projectId: "leticia-namora-comigo",
  storageBucket: "leticia-namora-comigo.appspot.com",
  messagingSenderId: "976844859729",
  appId: "1:976844859729:web:4055b54d85402b56740b70",
  measurementId: "G-7BECP22J1F",
};

let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;
