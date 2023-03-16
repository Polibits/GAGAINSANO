import React from "react";
import axios from 'axios';
import './../../GlobalStyle.css';
import './Login.css';
import { Link } from "react-router-dom";

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    var valid = false;

    if(email=='email@email.com' && password=='123'){
        console.log('autenticação bem sucedida');
    } else {
        console.log('falha na autenticação');
    }
}

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
                        <div className="Field">
                            <p>Email</p>
                            <label>
                                <input id="email" type="text"></input>
                            </label>
                        </div>
                        <div className="Field">
                            <p>Senha</p>
                            <label>
                                <input id="password" type="password"></input>
                            </label>
                        </div>    
                    </forms>
                    <div className="Button">
                        <button onClick={login}>entrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;