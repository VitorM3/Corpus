import { useNavigate } from "react-router-dom";
import { Container, Form, Hero, Text } from "./styles"

const Login = () => {
    const navigate = useNavigate()

    const handleAccess = () => {
        navigate('/relatoriodiario')
    }

    return (
        <Container>
            <Hero>
                <Text>
                    <h1 className="logo">Corpus</h1>
                    <p className='main-text'>Agendamentos para clínicas de fisioterapia, alinhando o paciente ao seu tempo.</p>
                    <p className='sub-text'>Com a Corpus você tem acesso a uma aplicação completa e intuitiva que conecta sua agenda à necessidade do cliente, tornando mais fácil gerenciar seus horários</p>
                </Text>
                <Form>
                    <h2>Login</h2>
                    <section>
                        <div>
                            <label htmlFor="user">Nome de usuário</label>
                            <input type="text" id="user" />
                        </div>
                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" />
                        </div>
                    </section>
                    <button onClick={handleAccess}>
                        Entrar
                    </button>
                </Form>
            </Hero>
        </Container>
    )
}

export default Login