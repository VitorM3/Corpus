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
              <h3 className="baseText">Login</h3>
          </form>
        </div>
      </div>     

    </>
  )
}

export default Login