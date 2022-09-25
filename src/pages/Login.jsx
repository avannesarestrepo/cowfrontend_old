import React from "react";
import '../assets/general.css';
import Logo from '../assets/images/Logo.png';
import ImageLogin from '../assets/images/imagen-login.svg';

function Login () {
    return (
        <>
            <div className="container-login">
                <form>
                    <img src={Logo} alt="Logo" className="image-logo"/>
                </form>

                <div className="image-login">
                    <img src={ImageLogin} alt="ImageLogin" className="image-login" />
                </div>
            </div>
        </>
    )
}

export default Login;