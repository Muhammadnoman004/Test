import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//     appId: import.meta.env.VITE_FIREBASE_AP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyD7dEwMJKwk7TA3nAl9_LElmvmpGGOuvSs",
    authDomain: "react-ecommerce-c1e09.firebaseapp.com",
    projectId: "react-ecommerce-c1e09",
    storageBucket: "react-ecommerce-c1e09.appspot.com",
    messagingSenderId: "1054691734929",
    appId: "1:1054691734929:web:33e7dc7e74a98ecce61630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db }