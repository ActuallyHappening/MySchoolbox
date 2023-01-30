// Initialize auth
import { Auth, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from './app';

import { GoogleAuthProvider } from "firebase/auth";

import { UI_signInBtn } from '../controllers/UI'

const provider = new GoogleAuthProvider();

let auth: undefined | Auth;

export function exec() {
	auth = getAuth(app);
	auth.useDeviceLanguage();
	UI_signInBtn.addEventListener('click', signIn)
}

const signIn = async () => signInWithPopup(auth!, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result)!;
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...

		console.log("YAY!", result, "user:", user, token)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
		console.error("ERROR!", error, errorCode, errorMessage, email, credential)
  });

