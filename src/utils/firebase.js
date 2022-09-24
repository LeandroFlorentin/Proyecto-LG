import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBzS5pFxQrkrOSZd2K7aeoYiJLuAepeBvE",
    authDomain: "pagina-lg-simulacion.firebaseapp.com",
    projectId: "pagina-lg-simulacion",
    storageBucket: "pagina-lg-simulacion.appspot.com",
    messagingSenderId: "610975464800",
    appId: "1:610975464800:web:add3583a6f8d795683f205"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;
