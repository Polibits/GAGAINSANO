import React from "react";
import axios from 'axios';
import './../../GlobalStyle.css';
import './Login.css';
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='LoginPage'>
                {content()}
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
            <div className="Forms">
                <h2>LoginPage</h2>
                <forms>
                    {Field('Email', 'email', 'text')}
                    {Field('Senha', 'password', 'password')} 
                </forms>
                <div className="Button">
                    <button onClick={login}>entrar</button>
                </div>
                <p>Ainda não tem conta? <Link to='/registro'>cadastre-se</Link></p>
            </div>
        );
    }
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var valid = false;

    const user = {
        email:email,
        password:password
    }

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

function loadUserInfo(email) {
    const data = {
        UserId:'',
        email:email,
        cpf:''
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