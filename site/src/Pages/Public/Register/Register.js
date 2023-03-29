import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import './../../GlobalStyle.css';
import './Register.css';
import InputValidator from"../../../Utility/InputValidator";

class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='RegisterPage'>
                <div id='PageContent'>
                    <div className="backToHome">
                        <Link>voltar</Link>
                    </div>
                    <RegisterForm/>
                </div>
                <div id='PageBackground'>
                    <StarsBackground />
                </div>
                
            </div>
        );
    }
}

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="RegisterForm">
                <div className="Forms">
                    <h2>Crie sua conta!</h2>
                    <form>
                        {Field('Nome Completo', 'fullName', 'text')}
                        {Field('Nome de Usuário', 'username', 'text')}
                        {Field('Email', 'email', 'text')}
                        {Field('CPF', 'cpf', 'text')}
                        {Field('Senha', 'password', 'password')}
                        {Field('Confirme sua senha', 'passwordConfirmation', 'password')}
                    </form>
                    {warning()}
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
    var SQLInjectionContent = false;
    const data = {
        email,
        password,
        fullName,
        username,
        cpf
    }

    if(InputValidator.SQLInjectionContent(fullName))
        SQLInjectionContent = true;
    else if(InputValidator.SQLInjectionContent(username))
        SQLInjectionContent = true;
    else if(InputValidator.SQLInjectionContent(email))
        SQLInjectionContent = true;
    else if(InputValidator.SQLInjectionContent(cpf))
        SQLInjectionContent = true;

    if(SQLInjectionContent){
        const ip = 'XX.XXX.XX.XX'; // TODO coletar ip
        const message = 'SQL Injection Detectado\n' + 
        'ip de origem: ' + ip + '\n' +
        'Um relatório da situação foi enviado para os administradores.\n' + 
        'Se for confirmada intenção maliciosa, medidas legais podem ser tomadas e a conta do usuário ficará bloqueada.';
        alert(message);
        console.log('SQL Injection Detectado');
        return;
    }

    if(InputValidator.emptyInput(fullName)){
        alert('Nome completo não pode estar vazio');
        return;
    } else if(!InputValidator.validInput(username)){
        alert('Nome de usuário inválido');
        return;
    } else if(!InputValidator.validEmail(email)){
        alert('Email Inválido');
        return;
    } else if(!InputValidator.validInput(cpf)){
        alert('CPF Inválido');
        return;
    } else if(!InputValidator.validPassword(password)) {
        alert('Senha inválida');
        return;
    } else if(password != passwordConfirmation){
        alert('Senhas diferentes');
        return;
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
            <p className="labelfield">{name}</p>
            <label>
                <input id={id} type={type}></input>
            </label>
        </div>
    );
}

function warning() {
    var fullName;
    var username;
    var email;
    var cpf;
    var password;
    var passwordConfirmation;

    try {
        fullName = document.getElementById("fullName").value;
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        cpf = document.getElementById("cpf").value;
        password = document.getElementById("password").value;
        passwordConfirmation = document.getElementById("passwordConfirmation").value;
    } catch (error) {
        
    }

    var warningMessage = 'nenhum aviso';
    var warning = false;

    if(warning){
        return (
            <div id='RegisterWarning'>
                <p>{warningMessage}</p>
            </div>
        );
    }else{
        return <></>;
    }
}

export default Register;