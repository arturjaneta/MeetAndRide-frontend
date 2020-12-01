import React, {useState} from "react";
import {authenticationService,register} from './AuthService';
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const AuthPage = ()=>{
    const [mode, setMode] = useState('Sign_in')

    const handleSubmitSignIn = ( email, password ) => {
        authenticationService.login(email, password)
    }

    const handleSubmitSignUp = (firstName,lastName,email,password) => {
        register({firstName:firstName,lastName:lastName,email:email,password:password}).then(setMode('Sign_in'))
    }

    const onSignUp = () =>{
        setMode('Sign_up');
    }

    const onRetrun = () =>{
        setMode('Sign_in');
    }

    return(
        <div>
            {mode==='Sign_in'?
            <SignInForm
                onSubmit={handleSubmitSignIn}
                onSignUp={onSignUp}
            />:
            <SignUpForm
                onSubmit={handleSubmitSignUp}
                onReturn={onRetrun}
            />}
        </div>
    );
    


}

export default AuthPage;