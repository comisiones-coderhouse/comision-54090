import { initializeApp } from "firebase/app";

console.log(import.meta.env.VITE_apiKey)

const firebaseConfig = {
    apiKey: "AIzaSyD84523VZYU1-nmO4fmCLWBLoTRMjOKJBE",
    authDomain: "comision-54090.firebaseapp.com",
    projectId: "comision-54090",
    storageBucket: "comision-54090.appspot.com",
    messagingSenderId: "975607718056",
    appId: "1:975607718056:web:52229951150f9a41db229d"
};

export const app = initializeApp(firebaseConfig);