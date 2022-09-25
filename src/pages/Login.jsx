import React from "react";
import '../assets/login.css';
import ImageLogin from '../assets/images/imagen-login.svg';
import LoginForm from "../components/LoginForm";

function Login () {
    return (
        <>
            <div className="container-login">
                <LoginForm />
                
                <div className="image-login">
                    <img src={ImageLogin} alt="ImageLogin" className="image-login" sizes="(min-width: 600px) 600px"/>
                </div>
            </div>
        </>
    )
}

export default Login;