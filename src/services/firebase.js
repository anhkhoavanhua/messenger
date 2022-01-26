import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyBqw8reh5scMoHDjkc2g92untRhOHuqwSU",
    authDomain: "messenger-8cffb.firebaseapp.com",
    databaseURL: "https://messenger-8cffb-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "messenger-8cffb",
    storageBucket: "messenger-8cffb.appspot.com",
    messagingSenderId: "775826830898",
    appId: "1:775826830898:web:1c3444a19a5eb74a8aee2b",
    measurementId: "G-EM2D5DTJ6H"
};

export const getFirebaseDatabase = (config) => {
    const app = initializeApp(config)
    return getDatabase(app);
}