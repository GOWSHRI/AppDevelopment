// firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyD6IWUjahgE676IueTG1N5ef5tW0AyKB2Y",
  authDomain: "design-f58b9.firebaseapp.com",
  projectId: "design-f58b9",
  storageBucket: "design-f58b9.appspot.com",
  messagingSenderId: "393762983690",
  appId: "1:393762983690:web:b9c27748fc9378249134f3",
  measurementId: "G-F4W5QR2R74"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set };
