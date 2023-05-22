import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/home')
    }
    return (
        <div className='w-50 mx-auto mb-3'>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-success  my-2'>
                <span className='px-2'>Sign in with Google</span></button>
        </div>
    );
};

export default Social;