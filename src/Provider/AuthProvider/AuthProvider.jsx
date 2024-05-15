import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../../Firebase/firebaseConfig";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading , setLoading] = useState(true)
// register
const createUser = ( email , password) =>{
    setLoading(true);
     return createUserWithEmailAndPassword(auth , email , password)
}
// login 
const loginUser = (email , password) => {
    setLoading(true);
  return   signInWithEmailAndPassword(auth, email, password)
}
// logout 
const logout = (email , password) => {
    return signOut(auth , email , password)
}
// Google 
const googleUser = (email , password)=>{
    setLoading(true);
  return  signInWithPopup(auth , googleProvider)
}
// github
const githubUser = (email , password) => {
    setLoading(true);
   return signInWithPopup(auth , githubProvider)
}

// updateProfile
const updateProfiles = (name , photo ) =>{
    return updateProfile(auth.currentUser ,{
        displayName: name , photoURL: photo
    })
 } 
useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth , currentUser => {
        setUser(currentUser)
        setLoading(false)
    })
    return () => {
        return unSubscribe()
    }
}, [])

// auth info
const authInfo = {
  user, 
  createUser,
  loginUser,
  googleUser,
  githubUser,
  loading,
  updateProfiles,
  logout
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;