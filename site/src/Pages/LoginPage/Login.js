import React from 'react';
import { Link } from 'react-router-dom';
import "./Components/Login.css";
import Logo from '../InitialPage/Assets/Logo.png';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='mainLogin'>
                <div className='box'>
                    <Link to='/'><img className='logo2' src={Logo}/></Link>
                    <h1>Seja bem vindo!</h1>
                    <hr />
                    <form>
                        <fieldset className='loginText'>
                            <input type={'text'} required name='username' placeholder='Digite seu nome'/>
                            <input type={'password'} required name='password' placeholder='Digite sua senha' />
                        </fieldset>
                        <fieldset className='buttons'>
                            <input type={'submit'} value='Acessar' />
                            <button>Esqueci minha senha</button>
                        </fieldset>
                    </form>
                    <span className='footer'>Não tem conta? <Link to='/SignUp'>Crie uma!</Link></span>
                </div>
            </main>
        );
    }
}

export default Login;