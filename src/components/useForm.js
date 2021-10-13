import { auth, provider } from '../services/firebase';
import { useHistory } from 'react-router-dom';


const useForm = () => {



    const history = useHistory();

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
        .then((res) => {
            const users = res.user
            console.log(users);
            history.push(`/home?name=${users.displayName}&email=${users.email}&profile=${users.photoURL}`);
            
        })
    };


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




    return { signInWithGoogle, signOut };
}

export default useForm;
