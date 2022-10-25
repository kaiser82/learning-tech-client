// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyDuk9JNunA6WD_6CQ2mED0Vy3JZ6ydM_0E",
    // authDomain: "learning-platform-client-88c86.firebaseapp.com",
    // projectId: "learning-platform-client-88c86",
    // storageBucket: "learning-platform-client-88c86.appspot.com",
    // messagingSenderId: "382978312326",
    // appId: "1:382978312326:web:5942ef52fe08ea67d56907"

    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;