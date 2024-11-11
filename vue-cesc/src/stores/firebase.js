// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase, usa tus propias credenciales
const firebaseConfig = {
    apiKey: "AIzaSyB9Rp-LgGxzkevj6EjDGOvk8SdaFzG0avQ",
    authDomain: "hist-esc.firebaseapp.com",
    databaseURL: "https://hist-esc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "hist-esc",
    storageBucket: "hist-esc.appspot.com",
    messagingSenderId: "530962055028",
    appId: "1:530962055028:web:62d701b1fdb81cb931f621"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa Firestore
const db = getFirestore(app);

export { db };
