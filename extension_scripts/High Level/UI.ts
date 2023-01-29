export const mainDiv = document.querySelector('.main')!
export const signInBtn = document.createElement('button')
signInBtn.innerText = "Sign in with Google"

// Add btn as first child of main div
mainDiv.insertBefore(signInBtn, mainDiv.firstChild)