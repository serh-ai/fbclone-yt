// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4gQGJo2keZAG84kldeMMGAMEYqgAH_t8",
    authDomain: "facebook-2-yt-90869.firebaseapp.com",
    projectId: "facebook-2-yt-90869",
    storageBucket: "facebook-2-yt-90869.appspot.com",
    messagingSenderId: "611254342361",
    appId: "1:611254342361:web:12acc75a4c6f290c8fe4c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const storage = getStorage(app)
