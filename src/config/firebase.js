// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";;
// import 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STRORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDERID,
    appId: import.meta.env.VITE_APP_ID,
    // measurementId: import.meta.env.VITE_MEASUREMENTID
};

// Initialize Firebase

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);

export default firebase