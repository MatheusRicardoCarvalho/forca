// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {myFirebaseConfig} from "../../credentials"
// Your web app's Firebase configuration
const firebaseConfig = myFirebaseConfig;

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);