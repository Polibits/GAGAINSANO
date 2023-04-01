import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import './Purgatory.css'

const cookies = new Cookies();

class Purgatory extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {   
        return (
            <div className="Page" id="PurgatoryPage" onLoad={this.getInfo}>
                <ActivateYourAccount/>
            </div>
        );
    }
}

function email() {
    return cookies.get('Purgatory');
}

class ActivateYourAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded:false,
            email:null
        }
    }

    render() {
        return (
            <div className="Page" id="ActivateYourAccountPage">
                <h1 className="Title">Ative sua conta!</h1>
                <p className="Explanation">Um email com o código de ativação foi enviado para {email()}.
                Caso ele não apareça na sua caixa de entrada, verifique a caixa de spam ou o lixo eletrônico.</p>
                <form className="Forms">
                    <label className="Label">Código de ativação:
                        <input type="text" id='ActivationCode'></input>
                    </label>
                    <button className="Button" onClick={this.activateAccount}>Ativar Conta</button>
                </form>
            </div>
        );
    }

    activateAccount = () => {
        const activationCode = document.getElementById('ActivationCode').value;
        
        axios({
            method: 'post',
            url: 'http://localhost:5050/user/account/activation/set',
            data: {
                email: email(),
                activationCode: activationCode
            }
        }).then(function(response) {
            console.log(response.data);
            if(response.data.response == 'sucess'){
                alert('Conta ativada com sucesso!\nSeja bem-vindo(a) ao Gagá Insano!');
                redirect('estudante/dashboard');
            } else if(response.data.response == 'wrong_activation_code'){
                alert('Código de autenticação incorreto');
            }
            return response.data;
        }).catch(function(error){
            alert('');
            console.log(error);
        });
    }
}

function redirect(local) {
    window.location.href = local;
}

export default Purgatory;