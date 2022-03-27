import React from 'react';
import { createUserDocumentFromAuth, signInWithGooglePopup } from 'utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        console.log(user);
        const userDocRef = createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <div className='container'>
            Sign In Page
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
}

export default SignIn;