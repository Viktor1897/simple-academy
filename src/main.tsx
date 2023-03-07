import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyAUACBOAZWjflsM3oXygj2hexLO9zdjKdA",
    authDomain: "simple-academy-dd05b.firebaseapp.com",
    projectId: "simple-academy-dd05b",
    storageBucket: "simple-academy-dd05b.appspot.com",
    messagingSenderId: "557557177",
    appId: "1:557557177:web:01ac0025b46081ee858268",
    measurementId: "G-JC348BKDNF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
        <span>Test home page</span>
    </React.StrictMode>,
);
