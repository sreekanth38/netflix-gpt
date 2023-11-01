// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRT9D1OIgefxYpwX3pELS8rdvFaSXP2Ys",
  authDomain: "netflixgpt-eefca.firebaseapp.com",
  projectId: "netflixgpt-eefca",
  storageBucket: "netflixgpt-eefca.appspot.com",
  messagingSenderId: "909777088661",
  appId: "1:909777088661:web:8a4fdf8db55d1369432b9c",
  measurementId: "G-RSZ7P57TEP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
