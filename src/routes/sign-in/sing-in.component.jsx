import React from 'react';
import { signInWithGooglePopup } from 'utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return (
        <div className='container'>
            Sign In Page
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </div>
    );
}

export default SignIn;