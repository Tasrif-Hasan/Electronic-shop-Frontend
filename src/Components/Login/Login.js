import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import login from '../../image/form/login.png'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Social from '../Social/Social';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const location = useLocation()


    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/home')
    }

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }


    if (loading) {
        <Loading></Loading>
    }

    const from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }



    const handleSubmitForm = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)


    };

    // reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    const handleResetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email)
            toast('Email sent')
        }
        else {
            toast('Please enter your valid email')
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <h2 className='mt-3 text-center' style={{ color: 'purple' }}> Login Form</h2>
                    <form onSubmit={handleSubmitForm} className='form-register'>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                        <input style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Login" />
                    </form>
                    {errorMessage}
                    <p>You have no Account?   <Link to='/register'>Please Register</Link></p>
                    <p>Forget Password? <button className='ps-0 btn btn-link text-primary ' onClick={handleResetPassword}>Reset Password</button></p>
                    <Social></Social>
                </div>

                <div className="col col-lg-6 col-12">
                    <div className='mt-5  '>
                        <img className='img-fluid rounded-2' src={login} alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;