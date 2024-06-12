import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../../Firebase/firebaseConfig";
import AxiosPublic from "../../Compnentes/Hooks/AxiosPublic/AxiosPublic";
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 
const AuthProvider = ({children}) => {
    const axiosPublic  = AxiosPublic();
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
        if(currentUser){
        const userInfo = {email : currentUser.email}
        axiosPublic.post("/jwt" , userInfo)
        .then(res =>{
            if(res.data.token){
                localStorage.setItem("access-token" , res.data.token);
            }
        })
        }
        else{
            localStorage.removeItem("access-token")
        }
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