var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { version } from "./package.json";
const patch = version.split(".")[2];
console.log("Dynamic bundle injected! Patch:", patch, "Version:", version);
// Change background color of body
document.body.style.backgroundColor = "green";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\
if (window.top !== window)
    throw new Error("This script should only be injected into the top window");
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
const app = initializeApp(firebaseConfig);
// Initialize auth
import { getAuth, signInWithPopup } from 'firebase/auth';
const auth = getAuth(app);
auth.useDeviceLanguage();
// import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
const signIn = () => __awaiter(void 0, void 0, void 0, function* () {
    return signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log("YAY!", result, "user:", user, token);
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.error("ERROR!", error, errorCode, errorMessage, email, credential);
    });
});
