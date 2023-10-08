// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQJX8QBNoaqIuNkRxI7KnOC06pksBbqE",
  authDomain: "wedding-plaaner-auh.firebaseapp.com",
  projectId: "wedding-plaaner-auh",
  storageBucket: "wedding-plaaner-auh.appspot.com",
  messagingSenderId: "591310206499",
  appId: "1:591310206499:web:ca57cd2b7ec73e11126396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;