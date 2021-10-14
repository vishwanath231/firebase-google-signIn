import { auth, googleProvider, githubProvider, facebookProvider } from '../services/firebase';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const useForm = () => {


    const [errMsg, setErrMsg] = useState("");


    const history = useHistory();

    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
        .then((res) => {
            const users = res.user
            history.push(`/home?name=${users.displayName}&email=${users.email}&profile=${users.photoURL}`);
            
        })
    };


    const signInWithFacebok = () => {
        auth.signInWithPopup(facebookProvider)
        .then((res) => {
            const users = res.user
            history.push(`/home?name=${users.displayName}&email=${users.email}&profile=${users.photoURL}`);
        })
        .catch((err) => {
            setErrMsg(err.message)
        })
    }
    


    const signInWithGithub = () => {
        auth.signInWithPopup(githubProvider)
        .then((res) => {

            const users = res.user
            history.push(`/home?name=${users.displayName}&email=${users.email}&profile=${users.photoURL}`);
        })
        .catch((err) => {
            setErrMsg(err.message)
        })
    }
    


    const signOut = () => {
        auth.signOut()
        .then(() => {

            const search = window.location.search;
            const params = new URLSearchParams(search);
            params.delete('name')
            params.delete('email')
            params.delete('profile')

            history.push('/');
        })
    }




    return { signInWithGoogle, signInWithGithub, signInWithFacebok, signOut, errMsg };
}

export default useForm;
