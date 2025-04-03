// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import firebase from "firebase/compat/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzgxzNwbGRQFXhZiUR7RCJHlto94-RCNM",
  authDomain: "smallshop-archive.firebaseapp.com",
  projectId: "smallshop-archive",
  storageBucket: "smallshop-archive.firebasestorage.app",
  messagingSenderId: "700350884336",
  appId: "1:700350884336:web:292cd60843a054f7781535",
  measurementId: "G-EHT20J48WG",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)

// export const firebaseInstance = firebase
// export const dbService = firebase.firestore()
// export const FieldValue = firebase.firestore.FieldValue

const db = getFirestore(app)

export { db }
