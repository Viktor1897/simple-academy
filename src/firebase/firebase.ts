import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAUACBOAZWjflsM3oXygj2hexLO9zdjKdA",
    authDomain: "simple-academy-dd05b.firebaseapp.com",
    projectId: "simple-academy-dd05b",
    storageBucket: "simple-academy-dd05b.appspot.com",
    messagingSenderId: "557557177",
    appId: "1:557557177:web:01ac0025b46081ee858268",
    measurementId: "G-JC348BKDNF"
};

const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);