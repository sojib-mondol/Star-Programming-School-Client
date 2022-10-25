import { createContext, useState } from "react";
import app from "../../firebase/firebase.config";
import {getAuth} from "firebase/auth";

export const AuthContext = createContext();

// auth 
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const user = {displayName: 'Sojib Mondol'}

    // use sagte for darkmod ..
    const [darkMode, setDarkMode] = useState(false);

    const authInfo = {user, darkMode, setDarkMode}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
    

export default AuthProvider;