// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCzCZMdXe5mEJqCyAmPE6gs3NPZXb9sFuc",
    authDomain: "electronic-shop-c0b67.firebaseapp.com",
    projectId: "electronic-shop-c0b67",
    storageBucket: "electronic-shop-c0b67.appspot.com",
    messagingSenderId: "1955737390",
    appId: "1:1955737390:web:35287cca358a9568dd54bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;