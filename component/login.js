import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import LoginScreen from '../navigation/pages/LoginScreen';
import MainContainer from '../navigation/MainContainer';

const login = () => {
    //false by default, switch true if authenticated
    const [authenticated, setAuthenticated] = useState(false);
    const [error, setError] = useState(null);

    //using exported auth from firebase.js, user check via auth

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    });

    const createUser = async (email, password) => {
        try{
            await createUserWithEmailAndPassword (auth, email, password);
        }catch(error){
            if(error.code === 'auth/weak-password'){
                setError('Password must be atleast 6 characters long');
            }else if (error.code === 'auth/invalid-email'){
                setError('The email is invalid')
            }else{
                setError('Problem authenticating account');
            }
        };
    };

    const signin = async (email, password) => {
        try{
            await signInWithEmailAndPassword (auth, email, password);
        }catch (error){
            console.log('There was a problem logging in');
        }
    };

    const logout = async () => {
        try{
            await signOut(auth);
        }catch(error){
            console.log('There was a problem while logging out');
        }
    };

    //if logged in, return MainContainer with logout function as prop to MainContainer so we can call logout from homepage
    if (authenticated){
        return <MainContainer logout={logout} />;
    }

    //Authentication with props for signin, creatureUser and error
    return <LoginScreen signin={signin} createUser={createUser} error={error} />

}

export default login