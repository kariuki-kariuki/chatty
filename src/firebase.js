import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC1amYqxlJaFnwYeR2897DNt9B6lQomJK4",
  authDomain: "chatty-96432.firebaseapp.com",
  projectId: "chatty-96432",
  storageBucket: "chatty-96432.appspot.com",
  messagingSenderId: "958842109364",
  appId: "1:958842109364:web:c1f21cd3bd9eb0fe4c06e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

