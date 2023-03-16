import React from "react";
import './../../GlobalStyle.css';
import './Register.css';

function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;
    const fullName = document.getElementById("fullName").value;
    const preferedName = document.getElementById("preferedName").value;

    if(password !== passwordConfirmation){
        console.log('as senhas são diferentes');
    }

    console.log({
        email,
        password,
        passwordConfirmation,
        fullName,
        preferedName
    });
}

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='RegisterPage'>
                <div className="Forms">
                    <h2>Crie sua conta!</h2>
                    <forms>
                        <div className="Field">
                            <p>Nome Completo</p>
                            <label>
                                <input id="fullName" type="text"></input>
                            </label>
                        </div>
                        <div className="Field">
                            <p>Nome de Usuário</p>
                            <label>
                                <input id="preferedName" type="text"></input>
                            </label>
                        </div>    
                        <div className="Field">
                            <p>Email</p>
                            <label>
                                <input id="email" type="text"></input>
                            </label>
                        </div>
                        <div className="Field">
                            <p>CPF</p>
                            <label>
                                <input id="cpf" type="text"></input>
                            </label>
                        </div>
                        <div className="Field">
                            <p>Senha</p>
                            <label>
                                <input id="password" type="password"></input>
                            </label>
                        </div>
                        <div className="Field">
                            <p>Confirme sua senha</p>
                            <label>
                                <input id="passwordConfirmation" type="password"></input>
                            </label>
                        </div>
                    </forms>
                    <div className="Button">
                        <button onClick={register}>registrar</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;