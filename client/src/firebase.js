// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-rishi.firebaseapp.com",
  projectId: "real-estate-rishi",
  storageBucket: "real-estate-rishi.appspot.com",
  messagingSenderId: "992996313300",
  appId: "1:992996313300:web:ba4aa30e71126622885341"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);