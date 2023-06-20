import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDjnGzIfLWlUjWN-oY_GEXHe4Adv6JIcaE",
  authDomain: "tik-tok---c.firebaseapp.com",
  projectId: "tik-tok---c",
  storageBucket: "tik-tok---c.appspot.com",
  messagingSenderId: "337646302273",
  appId: "1:337646302273:web:56295f106232d95e5bc2c0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db; 