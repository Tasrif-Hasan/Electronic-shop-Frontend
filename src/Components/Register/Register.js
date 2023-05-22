import React, { useState } from 'react';
import './Register.css'
import registration from '../../image/form/registraton.png'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Social from '../Social/Social';
import Loading from '../Loading/Loading';

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPass, setconfrimPass] = useState('')
    const [customError, setCustomError] = useState('')
    const navigate = useNavigate();

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = e => {
        setPassword(e.target.value)
    }
    const handleConfirmPassBlur = e => {
        setconfrimPass(e.target.value)
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let errorMessage;

    if (error) {
        errorMessage =
            <p className='text-danger'>Error: {error?.message}</p>
    }

    if (user) {
        navigate('/home')
    }
    if (loading) {
        <Loading></Loading>
    }

    const handleSubmitForm = e => {
        e.preventDefault();
        if (password !== confrimPass) {
            setCustomError('Please enter the valid password')
        }
        else {
            createUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="col col-lg-6 col-12 ">
                    <h2 className='mt-3 text-center' style={{ color: 'purple' }}> Register Form</h2>
                    <form onSubmit={handleSubmitForm} className='form-register'>
                        <input type="text" placeholder='Name' />
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Enter your email' required />
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                        <input onBlur={handleConfirmPassBlur} type="password" name="ConfirmPassword" id="" placeholder='Confirm Password' required />
                        <p><small className='text-danger'>{customError}</small></p>
                        <input style={{ backgroundColor: 'lightblue', fontSize: '18px' }} type="submit" value="Register" />
                    </form>
                    {errorMessage}

                    <p>Already have an account?   <Link to='/login'>Please Login</Link></p>
                    <Social></Social>
                </div>
                <div className="col col-lg-6 col-12 ">
                    <div className='mt-5  '>
                        <img className='img-fluid rounded-2' src={registration} alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;