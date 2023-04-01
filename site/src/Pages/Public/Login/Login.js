import React from "react";
import axios from 'axios';
import './../../GlobalStyle.css';
import './Login.css';
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import InputValidator from "../../../Utility/InputValidator";

const cookies = new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='Page' id='LoginPage'>
                <div id='PageContent'>
                    <div id='BackToHome'>
                        <p><Link to='/'>voltar</Link></p>
                    </div>
                        
                    <LoginForm/>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
            
        );
    }
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="FormsBase">
                <div className="Forms">
                    <h2>Login</h2>
                    <form>
                        {Field('Email', 'email', 'text')}
                        {Field('Senha', 'password', 'password')}
                    </form>
                    <div className="AcessButton">
                        <button onClick={login}>entrar</button>
                    </div>
                    <p>Ainda não tem conta? <Link to='/registro'>cadastre-se</Link></p>
                </div>
            </div>
        );
    }
}

function content() {
    // verifica se o usuário está logado (via cookies)
    if(cookies.get('loadedUser') == true){
        redirect();
        return (
            <div>
                <p>você já está logado! Redirecionando para área privada.</p>
            </div>
        );
    } else {
        
        return (
            <div className="FormsBase">
                <div className="Forms">
                    <h2>Login</h2>
                    <form>
                        {Field('Email', 'email', 'text')}
                        {Field('Senha', 'password', 'password')} 
                    </form>
                    <div className="Button">
                        <button onClick={login}>entrar</button>
                    </div>
                    <p>Ainda não tem conta? <Link to='/registro'>cadastre-se</Link></p>
                </div>
            </div>
        );
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var valid = true;

    const user = {
        email:email,
        password:password
    }

    if(InputValidator.SQLInjectionContent(email) || InputValidator.SQLInjectionContent(password)) {
        const ip = 'XX.XXX.XX.XX'; // TODO coletar ip
        const message = 'SQL Injection Detectado\n' + 
        'ip de origem: ' + ip + '\n' +
        'Um relatório da situação foi enviado para os administradores.\n' + 
        'Se for confirmada intenção maliciosa, medidas legais podem ser tomadas e a conta do usuário ficará bloqueada.';
        alert(message);
        console.log('SQL Injection Detectado');
    } else {
        if(!InputValidator.validEmail(email)){
            alert('email inválido');
            console.log('email inválido');
            valid = false;
        } else if(!InputValidator.validInput(password)){
            alert('senha inválida');
            console.log('senha inválida');
            valid = false;
        }
    }

    if(valid){
        try {
            console.log('tentativa de login de usuário:\n', user);
            axios({
                method:'get',
                url:'http://localhost:5050/user/authenticate',
                params: user
            }).then((response) => {
                console.log(response.data.response);
                if(response.data.response == 'sucess'){
                    console.log('usuário autenticado com sucesso');
                    loadUserInfo(email);
                    redirect();
                } else {
                    console.log('falha na autenticação');
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}

function loadUserInfo(email) {
    const data = {
        email:email
    }
    console.log(data);
    axios({
        method: 'get',
        url: 'http://localhost:5050/user/read',
        params:data

    }).then(function(response) {
        console.log(response.data);
        if(response.data.response == 'sucess'){
            console.log('COOKIE CRIADO');
            cookies.set(
                'userInfo', 
                response.data.user,
                {path: "/"}
            );
            cookies.set(
                'loadedUser', 
                true,
                {path: "/"}
            );
            
        }
    }).catch(function(error){
        console.log(error);
    });
}

function redirect() {
    window.location.href = '/estudante/dashboard';
}

function Field(name, id, type) {
    return (
        <div className="Field">
            <p>{name}</p>
            <label>
                <input id={id} type={type}></input>
            </label>
        </div>
    );
}

export default Login;