import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4kbIU5YJkz-fwimnLrI71t6qgJXrbWBM",
  authDomain: "finalproject-4574a.firebaseapp.com",
  projectId: "finalproject-4574a",
  storageBucket: "finalproject-4574a.appspot.com",
  messagingSenderId: "65704474835",
  appId: "1:65704474835:web:ab8b081c2c1dac54ea7c26",
  measurementId: "G-4VYK0FCEQ6"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
