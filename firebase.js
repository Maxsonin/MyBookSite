import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFFFghylDTtJk0grEO-2UTxbgshHXuOII",
  authDomain: "mybook-80fda.firebaseapp.com",
  projectId: "mybook-80fda",
  storageBucket: "mybook-80fda.appspot.com",
  messagingSenderId: "252249825985",
  appId: "1:252249825985:web:e868aaa8480e2f47f92a40",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const booksColection = collection(db, "BookRoot");
