import { initializeApp } from 'firebase/app'

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

export const useFirebese = () => app;

