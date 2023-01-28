"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_1 = __importDefault(require("firebase"));
const firebaseui_1 = __importDefault(require("firebaseui"));
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHMIEWGKltbgxnGaOFFECgv9NB5UtBE6I",
    authDomain: "my-schoolbox.firebaseapp.com",
    projectId: "my-schoolbox",
    storageBucket: "my-schoolbox.appspot.com",
    messagingSenderId: "965129762984",
    appId: "1:965129762984:web:069f5d1653398bd392aa9d",
    // measurementId: "G-6HVEME3PWB"
};
// Initialize Firebase
const app = (0, app_1.initializeApp)(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui_1.default.auth.AuthUI(firebase_1.default.auth());
// Create UI Div
const mainDiv = document.querySelector('.main');
// Create div as first child of `main` div
const uiDiv = document.createElement('div');
uiDiv.id = 'firebaseui-auth-container';
// mainDiv.insertBefore(uiDiv, mainDiv.firstChild);
mainDiv === null || mainDiv === void 0 ? void 0 : mainDiv.appendChild(uiDiv);
// Start UI
ui.start('#firebaseui-auth-container', {
    signInOptions: [
        firebase_1.default.auth.EmailAuthProvider.PROVIDER_ID,
        firebase_1.default.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase_1.default.auth.GithubAuthProvider.PROVIDER_ID,
        firebase_1.default.auth.PhoneAuthProvider.PROVIDER_ID
    ],
    // Other config options...
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            console.log("WE DID IT BOIS! SIGNED IN!");
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            // document.getElementById('loader').style.display = 'none';
        }
    },
    autoUpgradeAnonymousUsers: true, // False by default
});
