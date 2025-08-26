import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();

// sign in with google
export const signInWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        //get firebase token
        const idToken = await user.getIdToken();

        // pass to backend
        // const response = await axios.post()
        
    } catch (error) {
        console.log('Cannot sign in with google. An error occurred: ', error)
    }
}