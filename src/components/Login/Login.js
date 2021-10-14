import React from 'react';
import useForm from '../useForm';
import './Login.css';
import google from './google.png';
import github from './github.png';
import facebook from './facebook.png'


const Login = () => {
    const { signInWithGoogle, signInWithFacebok, signInWithGithub, errMsg } = useForm(); 
    
    return (
        <div className="login__container">
        
            <div className="login__box">
               { errMsg !== "" ? ( <p>{errMsg}</p> ): null }
                <div className="login__btns">
                    <button  className="login__btn" onClick={signInWithGoogle}>
                        <img src={google} alt="" /> <span>Sign in with google</span>
                    </button>
                    <button className="login__btn" onClick={signInWithFacebok} >
                       <img src={facebook} alt="" /> <span>sign in with facebook</span></button>
                    <button className="login__btn" onClick={signInWithGithub} >
                        <img src={github} alt="" /> <span>sign in with github</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
