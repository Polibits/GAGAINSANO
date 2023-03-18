import React from "react";
import axios from 'axios';
import './../../GlobalStyle.css';
import './Login.css';
import Stars from "../../Common Components/StarsBackground/StarsBackground";
import { Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className='LoginPage'>
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
                window.location.href = '/';
            } else {
                console.log('falha na autenticação');
            }
        });
    } catch (error) {
        console.log(error);
    }
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