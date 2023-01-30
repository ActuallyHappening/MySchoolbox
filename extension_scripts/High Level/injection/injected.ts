import { mainDiv } from "../parser/parse"
export const signInBtn = document.createElement('button')
signInBtn.innerText = "Sign in with Google"
// export const signOutBtn = // TODO

// Add btn as first child of main div
mainDiv.insertBefore(signInBtn, mainDiv.firstChild)