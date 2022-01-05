import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import firebase from 'firebase';
import {useDispatch} from 'react-redux'
import {auth,provider} from './firebase'
import {login} from './features/userSlice'
function Login() {
    const dispatch=useDispatch()
    const signIn=()=>{
auth.signInWithPopup(provider).then(({user})=>{
    dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoUrl:user.photoURL,
    }));
}).catch((error)=>alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"/>

            <Button variant="contained" color="primary" onClick={signIn}>Login</Button>


            </div>
        </div>
    )
}

export default Login
