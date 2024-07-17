import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDlxJgg55QBkGIT28mOdHHhoN8TqcEvWDs",
    authDomain: "learnacad-430fb.firebaseapp.com",
    projectId: "learnacad-430fb",
    storageBucket: "learnacad-430fb.appspot.com",
    messagingSenderId: "413136806258",
    appId: "1:413136806258:web:1d8d25147fba832c3bfdeb",
    measurementId: "G-ZLK7BTS7KJ"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

const logout = () => {
  return signOut(auth);
};

export { auth, signInWithGoogle, logout };
