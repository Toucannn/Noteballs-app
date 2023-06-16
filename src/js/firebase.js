import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAB2BZnmgqzPS1WKaTCizxdrHCFDuhxPV8",
  authDomain: "noteballs-d7958.firebaseapp.com",
  projectId: "noteballs-d7958",
  storageBucket: "noteballs-d7958.appspot.com",
  messagingSenderId: "165482835835",
  appId: "1:165482835835:web:5fe550ae56368bd38c17de"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {
    db
}