// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFZ8Xj_qKtWfhEXQLcy4afzzFWXyWoS-w",
  authDomain: "netflix-clone-54faf.firebaseapp.com",
  projectId: "netflix-clone-54faf",
  storageBucket: "netflix-clone-54faf.firebasestorage.app",
  messagingSenderId: "522128335153",
  appId: "1:522128335153:web:a1d984fe7adc36b64bd010",
  measurementId: "G-CXPBTKZSBK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp); 

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;
