import React from "react";
import axios from 'axios';
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
                <h1>LoginPage</h1>
                <div className="Forms">
                    <forms>
                        <label>
                            Email
                            <input id="email" type="text"></input>
                        </label>
                        <label>
                            Senha
                            <input id="password" type="password"></input>
                        </label>
                    </forms>
                    <button onClick={login}>entrar</button>
                </div>
            </div>
        );
    }
}

export default Login;