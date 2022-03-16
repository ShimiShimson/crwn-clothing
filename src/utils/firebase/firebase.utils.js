import { initializeApp } from 'firebase/app';

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCk7lWCLo7LhgmjrdXR60UuN4zRBU1k9GY",
    authDomain: "simon-crwn-clothing.firebaseapp.com",
    projectId: "simon-crwn-clothing",
    storageBucket: "simon-crwn-clothing.appspot.com",
    messagingSenderId: "975147189862",
    appId: "1:975147189862:web:aa46fbf30ccacf715e4fa7"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);