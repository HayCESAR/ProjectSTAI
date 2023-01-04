import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDtQAABIo_ly6q4xVpvAteixNZ39Yiu7wY",
  authDomain: "stai-8077d.firebaseapp.com",
  projectId: "stai-8077d",
  storageBucket: "stai-8077d.appspot.com",
  messagingSenderId: "649845641358",
  appId: "1:649845641358:web:8f19cb81ff3513679239df",
  measurementId: "G-SXFF7DTM2D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;