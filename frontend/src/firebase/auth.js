import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios';
import api from "../api/axiosInstance";

const provider = new GoogleAuthProvider();

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// sign in with google
export const signInWithGoogle = async ()=>{
    try {
        const result = await signInWithPopup(auth, provider);
        
        //get firebase token
        const idToken = await result.user.getIdToken();

        // pass to backend
        const response = await axios.post(`${API_BASE_URL}/auth/signin-google`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${idToken}`
                },
                withCredentials: true
            }
        )
        console.log(response)

        //return response.data
        return response.data
    } catch (error) {
        console.log('Cannot sign in with google. An error occurred: ', error)
    }
}

export const signOut = async ()=>{
    try {
        await api.post(`${API_BASE_URL}/auth/signout`)
        await auth.signOut();
    } catch (error) {
        console.log('Error signing out: ', error)
    }
}