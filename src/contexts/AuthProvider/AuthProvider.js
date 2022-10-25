import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

// auth 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    //const user = {displayName: 'Sojib Mondol'}
    // const user = {displayName: 'Batas Ali'}
    const [user, setUser] = useState(null);

    // Step: 1 set loding state for the not pop up login when user refresh the private page
    const [loading, setLoading] = useState(true);

    // use sagte for darkmod ..
    const [darkMode, setDarkMode] = useState(false);

    // user observer for user login state 
    // Get the currently signed-in user
    // so we need use effect
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            setUser(currentUser);
            setLoading(false); // step: 2. set loding state for the not pop up login when user refresh the private page
        });
        
        return () => {
            unsubscribe();
        }

    }, [])

    // sign in 
    const signIn = (email, password) => {
        //setLoading(true) // step: 4: set loding state for the not pop up login when user refresh the private page
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google 
    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // sign in with gitHub 
    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Sign out 
    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {user, darkMode, setDarkMode, signIn, googleSignIn, githubSignIn, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
    

export default AuthProvider;