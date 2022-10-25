import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

// auth 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {displayName: 'Sojib Mondol'}

    // use sagte for darkmod ..
    const [darkMode, setDarkMode] = useState(false);

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

    const authInfo = {user, darkMode, setDarkMode, signIn, googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
    

export default AuthProvider;