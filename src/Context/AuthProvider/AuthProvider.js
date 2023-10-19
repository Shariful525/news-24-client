import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);

    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('inside auth state changed', currentUser);
            setUser(currentUser)
            setLoading(false)
        });

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loading, emailVerification, setUser, signInWithGoogle, logOut, createUser, loginWithEmailAndPassword, updateUserProfile }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;