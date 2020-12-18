import React,{useState} from 'react'
import "./styleSheets/login.css"
import {Button }from "@material-ui/core"
import { auth, provider } from './Firebase'

function Login() {

    const SignIn = () =>{
        auth
        .signInWithPopup(provider)
        .then(result =>{          /* promises.then for positive outcome */
            // console.log(result)
            sessionStorage.setItem('userId' , `${result.user.email}` );
            sessionStorage.setItem('userName' , `${result.user.displayName}` );
            sessionStorage.setItem('userPhoto', `${result.user.photoURL}` );
            sessionStorage.setItem('userPhoneNO', `${result.user.phoneNumber}` );
        }) 
        .catch(error =>{
            alert(error.message);
        });
    }
    return (
        <div className="login">
            <div className="login_container">
                <img
                src="https://scontent-del1-1.xx.fbcdn.net/v/t1.0-9/19555018_460895997623222_1633186150588911699_n.png?_nc_cat=110&ccb=2&_nc_sid=dd9801&_nc_ohc=-2AOc5mVZf4AX-3HVwt&_nc_ht=scontent-del1-1.xx&oh=2ea557d8052c97108a2affe0c72483f5&oe=5FF7B8B4"
                alt=""
             />
             <h1> Sign in to Poll INDIA</h1>
             <p> Made with love by CodeChamps</p>
             <Button onClick={SignIn}>Sign in with GOOGLE</Button>
            </div>
            
        </div>
    )
}

export default Login
