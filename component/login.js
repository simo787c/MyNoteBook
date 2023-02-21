import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './firebase';
import Authentication from '../navigation/pages/LoginScreen';
import MainContainer from '../navigation/MainContainer';

import React from 'react'

const login = () => {
    //false by default, switch true if authenticated
    const {Authenticated, setAuthenticated} = useState(false);
}

export default login