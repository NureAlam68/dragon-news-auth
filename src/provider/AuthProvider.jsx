import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo={
        createUser, 
        setUser,
        user,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes= {
    children: PropTypes.object
}

export default AuthProvider;