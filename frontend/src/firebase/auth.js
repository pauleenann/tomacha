import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();

// sign in with google
export const signInWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup(auth, provider);
        
        //get firebase token
        const idToken = await result.user.getIdToken();

        // pass to backend
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signin-google`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${idToken}`
                }
            }
        )
        console.log(response)

        //return response.data
        return response.data
    } catch (error) {
        console.log('Cannot sign in with google. An error occurred: ', error)
    }
}