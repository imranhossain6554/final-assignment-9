// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSyzXOURr7MA3cE5edxJu6QqxUikvLTrY",
  authDomain: "hotel-booking-next-app.firebaseapp.com",
  projectId: "hotel-booking-next-app",
  storageBucket: "hotel-booking-next-app.appspot.com",
  messagingSenderId: "485786423998",
  appId: "1:485786423998:web:fc9cb334cdbb840814c4ef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
