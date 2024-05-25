import React from 'react';

import './Login.css';
import { useNavigate } from 'react-router-dom';
import email_icon from '../Asset_Log/email.png';
import password_icon from '../Asset_Log/password.png'

export const Login = () => {
    const navigate=useNavigate();
  return (
  
    <div className='container'>
        <div className="header">
            <div className="text">Se connecter</div>

            <div className="underline"></div>
        </div>
    <div className="inputs">
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder='Email' />
        </div>

        <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder='Mot de passe'/>
        </div>
        <div className="forgot-password">mot de passe oublié?<span>cliquer ici!</span></div>
        <div className="submit-container">
            <div className="submit" onClick={() =>navigate("/dashboard")}>Entrer</div>
            
        </div>
    </div>
    </div>
  )
}


export default Login