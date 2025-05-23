// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvPhmcIrz-IBjhuqST3lWCSeMUp_jv3h4",
  authDomain: "garden-7f01a.firebaseapp.com",
  projectId: "garden-7f01a",
  storageBucket: "garden-7f01a.firebasestorage.app",
  messagingSenderId: "98722885042",
  appId: "1:98722885042:web:43d855d1932720b829c8ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);