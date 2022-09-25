import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/images/Logo.png';
import iconUser from '../assets/images/icons/User.png';
import iconEye from '../assets/images/icons/Eye.png';

function LoginForm () {
    const [shown, setShown] = useState(false);

    const switchShown = () => setShown(!shown);

    return (
        <>
            <form>
                <img src={Logo} alt="Logo" className="image-logo"/>

                <label className="label-usuario">Usuario</label>
                <input type="text" name="usuario" id="usuario" className="input-usuario" />
                <img src={iconUser} className="icon-usuario" alt="iconUsuario"/>
                <label className="label-password">Contraseña</label>
                <input type={shown ? 'text' : 'password'} name="contrasena" id="contrasena" className="input-password" />
                <img src={iconEye} className="icon-password" alt="iconPassword" onClick={switchShown}/>

                <button className="button-iniciar">Iniciar</button>
            </form>

            <Link className="hipervinculo">¿Has olvidado tu contraseña?</Link>
            <Link className="hipervinculo crearCuenta" to="/">Crear una cuenta</Link>
        </>
    )
}

export default LoginForm;