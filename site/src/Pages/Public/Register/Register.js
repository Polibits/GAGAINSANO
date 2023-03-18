import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import './../../GlobalStyle.css';
import './Register.css';

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
                        {Field('Nome Completo', 'fullName', 'text')}
                        {Field('Nome de Usuário', 'username', 'text')}
                        {Field('email', 'email', 'text')}
                        {Field('CPF', 'cpf', 'text')}
                        {Field('Senha', 'password', 'password')}
                        {Field('Confirme sua senha', 'passwordConfirmation', 'password')}
                    </forms>
                    <div className="Button">
                        <button onClick={register}>registrar</button>
                        <p>Ao se inscrever, você concorda com os <Link>termos de serviço</Link> do site</p>
                    </div>
                </div>
            </div>
        );
    }
}

function register() {
    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const password = document.getElementById("password").value;
    const passwordConfirmation = document.getElementById("passwordConfirmation").value;

    const data = {
        email,
        password,
        fullName,
        username,
        cpf
    }
    
    console.log('tentando criar usuário:\n', data);

    try {
        axios({
            method:'post',
            url:'http://localhost:5050/user/create',
            data:data
        }).then((response) => {
            if(response.data.response == 'sucess'){
                console.log('usuário criado com sucesso!');
            }
            console.log(response);
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

export default Register;