import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCdmXz0UAriPncICzqlEqvW8Egbv5bN5U",
  authDomain: "tiendaajalderaiz.firebaseapp.com",
  projectId: "tiendaajalderaiz",
  storageBucket: "tiendaajalderaiz.appspot.com",
  messagingSenderId: "989148700621",
  appId: "1:989148700621:web:99ca86bd7eee9cc8712e84",
  measurementId: "G-1LBW08LH4B"
};

const app = initializeApp(firebaseConfig);

export const useFirebese = () => getFirestore(app)
export const db = getFirestore(app)
export default app;