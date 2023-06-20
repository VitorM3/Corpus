import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import PrimaryButton from '../../core/components/PrimaryButton.style.jsx';
import InputComponent from "../../core/components/Input.style";
import InputPassorwd from "../../core/components/InputPassword.style"
import { FaUser, FaEyeSlash } from "react-icons/fa";
import './Login.css'

const Login = () =>{

  return(
    <>
      <div className="screenLogin">
        <div className="element">
          <div className="info">
            <h1>Corpus</h1> 
            <h2 className="baseText">Agendamentos para clínicas de fisioterapia, alinhando o paciente ao seu tempo.</h2>
            <span>Com a Corpus você tem acesso a uma aplicação completa e intuitiva que conecta sua agenda à necessidade do cliente, tornando mais fácil gerenciar seus horários</span>
          </div>
        </div>
        <div className="element">
          <form className="formLogin">
              <div className='titleForm'>
                <h3 id="loginHeading" className="baseText"><strong>Login</strong></h3>
              </div>
              <div className='elementsForm'>
              
                <InputComponent labelText="Usuário" type="text"  icon={FaUser} style={{ marginBottom: '100px' }}/>
                <InputPassorwd/>
                <Link to="/relatoriodiario">
                <PrimaryButton 
                  elementWidth = '25vw'
                  elementheight = '7vh'
                  elementMargin = '3vh'>
                 Entrar
                </PrimaryButton>
                </Link>
               
              </div>                
          </form>
        </div>
      </div>     

    </>
  )
}

export default Login