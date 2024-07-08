// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuOssir5YbhUs1ShcRzW_pPjvmt_V8LD0",
  authDomain: "login-auth-1368f.firebaseapp.com",
  projectId: "login-auth-1368f",
  storageBucket: "login-auth-1368f.appspot.com",
  messagingSenderId: "777852702332",
  appId: "1:777852702332:web:cabb2ab6b983c9ac0483f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
