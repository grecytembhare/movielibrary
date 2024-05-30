// src/auth.js
import {
    createUserWithEmailAndPassword,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
 } from 'firebase/auth';
 import firebase, { auth } from './firebase';
 
 const googleprovider = new GoogleAuthProvider();
 const githubprovider = new GithubAuthProvider();
 export const signInWithEmailPassword = async (email, password) => {
    try {
       const user = await signInWithEmailAndPassword(auth, email, password)
 
       return user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 export const getUserUid = async (uid) => {
    return uid
 }
 export const signInWithGoogle = async () => {
    
    try {
       const result = await signInWithPopup(auth, googleprovider);
       // The signed-in user info.
       const user = result.user;
       await getUserUid(user.uid)
       // console.log();
       // This gives you a Google Access Token.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       return user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 
 export const signInWithGithub = async () => {
   
    try {
       const userCredential = await signInWithPopup(auth, githubprovider);
       return userCredential.user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 // * -----------------------------
 export const signUpWithEmailPassword = async (email, password, firstName, lastName) => {
    try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
       const user = userCredential.user;
       await updateProfile(auth.currentUser, {
          displayName: `${firstName} ${lastName}`,
       });
       return user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 
 
 export const signUpWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
       const result = await signInWithPopup(auth , provider);
       // The signed-in user info.
       const user = result.user;
       // This gives you a Google Access Token.
       const credential = GoogleAuthProvider.credentialFromResult(result);
       const token = credential.accessToken;
       return user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 
 export const signUpWithGithub = async () => {
  
    try {
       const result = await signInWithPopup(auth , githubprovider);
       const user = result.user;
       return user;
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 // * -----------------------------
 export const signOut = async () => {
    try {
       await firebase.auth().signOut();
    } catch (error) {
       console.error(error);
       throw error;
    }
 };
 