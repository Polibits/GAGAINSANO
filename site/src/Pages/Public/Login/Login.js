import React from "react";
import axios from 'axios';
import './../../GlobalStyle.css';
import './Login.css';
import { Link } from "react-router-dom";

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
                    <Link to='/registro'>registrar-se</Link>
                </div>
            </div>
        );
    }
}

export default Login;