import React from "react";
import '../assets/Register.css';
import ImageRegister from '../assets/images/imagen-register.svg';
import RegistrarseForm from "../components/RegisterForm";
import { Link } from "react-router-dom";

function Register(){
    return(
        <>
            <div className="container-register">
                <RegistrarseForm />

                <div className="image-register">
                    <img src={ImageRegister} alt="ImageLogin" className="image-register"/>
                </div>

                <Link to="/" className="hipervinculo-inicio">Iniciar Sesión</Link>
            </div>
        </>
    )
} 

export default Register;