import { exec as exec_auth } from "./firestore/auth";
import { exec as exec_firestore } from "./firestore/firestore";
import {version} from "./package.json";
const patch = version.split(".")[2];

console.log("Dynamic bundle injected! Patch:", patch, "Version:", version);

// Change background color of body
document.body.style.backgroundColor = "green"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries\

if (window.top !== window) throw new Error("This script should only be injected into the top window");

exec_auth();
exec_firestore();