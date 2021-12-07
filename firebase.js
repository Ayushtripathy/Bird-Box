// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBrzUTvZMQzRJcn9D8XV3mgKIwF153cQOo",
  authDomain: "bird-box-ba16c.firebaseapp.com",
  projectId: "bird-box-ba16c",
  storageBucket: "bird-box-ba16c.appspot.com",
  messagingSenderId: "582251846949",
  appId: "1:582251846949:web:ee814711d57ed3c4238ecc",
};

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
