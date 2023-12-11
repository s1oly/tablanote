import { useState } from 'react'
import {auth, googleProvider } from '../../Config/firebaseConfig'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'


const Auth = () => {

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState(" ");

    const SignIn = async () => {
        try {
        await createUserWithEmailAndPassword(auth, email, password)
        } catch (err) {
            console.error(err)
        }
        
    };

    const googleSignIn = async () => {
        try {
        await signInWithPopup(auth, googleProvider)
        } catch (err) {
            console.error(err)
        }
        
    };

    const logout = async() => {
        try {
            await signOut (auth)
            } catch (err) {
                console.error(err)
            }
    };

    return(
        <div>
            <input placeholder="Email" onChange={(e) => SetEmail(e.target.value)}/>
            <p/>
            <input placeholder="Password" type = 'password' onChange={(e) => SetPassword(e.target.value)}/>
            <p/>
            <button onClick={SignIn}>Sign In</button>
            <p/>
            <button onClick = {googleSignIn}>Sign in with Google</button>
            <p/>
            <button onClick = {logout}>Log Out</button>

        </div>
    )
}

export default Auth;