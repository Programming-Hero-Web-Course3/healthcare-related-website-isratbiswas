import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();
    const handleGoogleSignIn = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
            })
            .finally(() => setIsLoading(false))

    }
    const signUp = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    };

    return {
        user,
        isLoading,
        signUp,
        handleGoogleSignIn,
        logOut,


    }


};

export default useFirebase;