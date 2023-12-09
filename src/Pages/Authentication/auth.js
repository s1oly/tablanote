import { useState } from 'react'
import {auth} from '../../Config/firebaseConfig'
import {createUserWithEmailAndPassword} from 'firebase/auth'


const Auth = () => {

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState(" ");

    const SignIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    };

    return(
        <div>
            <input placeholder="Email" onChange={(e) => SetEmail(e.target.value)}/>
            <input placeholder="Password" type = 'password' onChange={(e) => SetPassword(e.target.value)}/>
            <button onClick={SignIn} >Sign In</button>

        </div>
    )
}

export default Auth;