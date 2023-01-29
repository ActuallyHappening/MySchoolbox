console.log("Dynamic bundle injected!");
// Change background color of body
document.body.style.backgroundColor = "red";
import firebase from 'firebase';
import firebaseui from 'firebaseui';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\
if (window.top === window) {
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
    const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
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
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
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
}
else {
    console.warn("Injected scripe is not executing in iFrame :)");
}
