import React from 'react';
import './Components/SignUp.css';

class SignUp extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='mainSignUp'>
                <div className='box'>
                    <h1>Formulário de cadastro</h1>
                    <p>Por favor, preencha as seguintes informações</p>
                    <form>
                        <label>Nome: <input type={'text'} required name='nome' placeholder='insira seu nome'/></label>
                        <label>CPF: <input type={'text'} required name='cpf' placeholder='insira seu CPF' /></label>
                        <label>E-mail: <input type={'email'} required name='email' placeholder='insira seu e-mail' /></label>
                        <label>Senha: <input type={'password'} required name='password' placeholder='insira sua senha' /></label>
                        <label>Confirme sua senha: <input type={'password'} required name='password2' placeholder='insira sua senha novamente' /></label>
                        <button>Cadastre-se!</button>
                    </form>
                </div>
            </main>
        );
    }
}

export default SignUp