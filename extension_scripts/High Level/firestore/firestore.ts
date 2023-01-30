import {collection, getDocs, getFirestore} from 'firebase/firestore'
import { app } from './app'

console.log("Loading firestore.ts ...")

export const db = getFirestore(app);

export async function exec() {
	console.log("execing firestore.ts")
	const querySnapshot = await getDocs(collection(db, "_testing"));
	querySnapshot.forEach(doc => {
		console.log("DOC:", `${doc.id} == `, doc.data())
		if (doc.id == 'background') document.body.style.backgroundColor = doc.data()['color']
	})
}