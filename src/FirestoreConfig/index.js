import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCdmXz0UAriPncICzqlEqvW8Egbv5bN5U",
  authDomain: "tiendaajalderaiz.firebaseapp.com",
  projectId: "tiendaajalderaiz",
  storageBucket: "tiendaajalderaiz.appspot.com",
  messagingSenderId: "989148700621",
  appId: "1:989148700621:web:99ca86bd7eee9cc8712e84",
  measurementId: "G-1LBW08LH4B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

