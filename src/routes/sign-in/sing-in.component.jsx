import React from 'react';

import SignUpForm from 'components/sign-up-form/sign-up-form.component';

import {
    createUserDocumentFromAuth,
    signInWithGooglePopup,
} from 'utils/firebase/firebase.utils';


const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    return (
        <div className='container'>
            Sign In Page
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;