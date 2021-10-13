import React from 'react';
import useForm from '../useForm';
import './Login.css';
import google from './google.png';


const Login = () => {
    const { signInWithGoogle } = useForm(); 
    
    return (
        <div className="login__container">
            <button 
                className="login__btn" 
                onClick={signInWithGoogle}
            >
            <img src={google} alt="" /> <span>Sign in with google</span>
            </button>
        </div>
    )
}

export default Login;
