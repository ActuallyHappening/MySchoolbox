// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBHMIEWGKltbgxnGaOFFECgv9NB5UtBE6I",
	authDomain: "my-schoolbox.firebaseapp.com",
	projectId: "my-schoolbox",
	storageBucket: "my-schoolbox.appspot.com",
	messagingSenderId: "965129762984",
	appId: "1:965129762984:web:069f5d1653398bd392aa9d",
	measurementId: "G-6HVEME3PWB"
};

// Initialize Firebase
import { initializeApp } from "firebase/app";
export const app = initializeApp(firebaseConfig);