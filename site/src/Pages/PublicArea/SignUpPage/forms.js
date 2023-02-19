import React from 'react';
import axios from 'axios';

class FormularioRegistrarUsuario extends React.Component {
    constructor(props) {
        super(props);

        /* no estado, a "senhasIguais" significa marca se a senha,
           de fato, igual a confirmacao. Pode usar isso no CSS e
           tambem para nao enviar a request se esta invalido */
        this.state = {
            nome: '',
            usuario: '',
            email: '',
            cpf: '',
            senha: '',
            senhaConfirmada: '',
            senhasIguais: false
        }
        
        this.escrevendoNome = this.escrevendoUsuario.bind(this);
        this.escrevendoUsuario = this.escrevendoUsuario.bind(this);
        this.escrevendoEmail = this.escrevendoEmail.bind(this);
        this.escrevendoCPF = this.escrevendoCPF.bind(this);
        this.escrevendoSenha = this.escrevendoSenha.bind(this);
        this.escrevendoSenhaConfirmada = this.escrevendoSenhaConfirmada.bind(this);
        this.deuSubmit = this.deuSubmit.bind(this);
    }

    escrevendoNome(event) {
        this.setState({
            nome: event.target.value,
            usuario: this.state.usuario,
            email: this.state.email,
            cpf: this.state.cpf,
            senha: this.state.senha,
            senhaConfirmada: this.state.senhaConfirmada,
            senhasIguais: this.state.senhasIguais
        });
    }

    escrevendoUsuario(event) {
        this.setState({
            nome: this.state.nome,
            usuario: event.target.value,
            email: this.state.email,
            cpf: this.state.cpf,
            senha: this.state.senha,
            senhaConfirmada: this.state.senhaConfirmada,
            senhasIguais: this.state.senhasIguais
        });
    }
    
    escrevendoEmail(event) {
        this.setState({
            nome: this.state.nome,
            usuario: this.state.usuario,
            email: event.target.value,
            cpf: this.state.cpf,
            senha: this.state.senha,
            senhaConfirmada: this.state.senhaConfirmada,
            senhasIguais: this.state.senhasIguais
        });
    }

    escrevendoCPF(event) {
        this.setState({
            nome: this.state.nome,
            usuario: this.state.usuario,
            email: this.state.email,
            cpf: event.target.value,
            senha: this.state.senha,
            senhaConfirmada: this.state.senhaConfirmada,
            senhasIguais: this.state.senhasIguais
        });
    }
    
    escrevendoSenha(event) {
        this.setState({
            nome: this.state.nome,
            usuario: this.state.usuario,
            email: this.state.email,
            cpf: this.state.cpf,
            senha: event.target.value,
            senhaConfirmada: this.state.senhaConfirmada,
            senhasIguais: event.target.value == this.state.senhaConfirmada ? true : false
        });

    }
    escrevendoSenhaConfirmada(event) {
        this.setState({
            nome: this.state.nome,
            usuario: this.state.usuario,
            email: this.state.email,
            cpf: this.state.cpf,
            senha: this.state.senha,
            senhaConfirmada: event.target.value,
            senhasIguais: event.target.value == this.state.senha ? true: false
        })
    }

    async deuSubmit(event) {
        /* caso o formulario esteja preenchido corretamente, faz a requisicao do tipo post */
        if (this.state.senhasIguais && this.state.nome != '' && this.state.senha != '' && this.state.usuario != '') {
            await axios.post('https://127.0.0.1:2020', 
            /* aqui eh o body da requisicao, MUDAR PARA TER OS MESMOS NOMES DO BACKEND */
            {
                nome: this.state.nome,
                usuario: this.state.usuario,
                email: this.state.email,
                cpf: this.state.cpf,
                senha: this.state.senha
            }
            ).then((response) => {
                if (response.status == 200) {
                    /* Comportamento caso o backend de uma response com status 200 OK!*/
                    /* Precisa dar res.status(200).send("textinho papo coach") no backend 
                       para funcionar direito */
                    console.log("Usuário registrado!")
                } else {
                    /* Comportamento caso não seja possivel fazer o registro */
                    console.log("Ocorreu um erro durante o registro")
                }
            }).catch((err) => {
                /* Caso aconteca algum erro, especialmente do codigo de cima crashar por algum motivo, vai vir para ca.
                   Se vir para ca, deu alguma merda mto grande. Zoeira :< */
                /* Para ajudar no desenvolvimento, o erro sera printado abaixo */  
                   console.log("Deu um erro louco: \n" + err);
            })
        } else {
            /* aqui coloca algum comportamento desejado caso o forms
               nao esteja vem preenchido */
            console.log("Existem dados incoerentes!")
        }
    }

    render () {
        return (
            <form onSubmit={this.deuSubmit}>
                {
                    /*
                        Cada uma das labels tem um campo,
                        assim, para fazer o login, a logica eh a mesma
                        da que esta implementada aqui.
                    */
                }
                <label>
                    Nome Completo:
                    <input type="text" value={this.state.nome} name="nome" onChange={this.escrevendoNome}/>
                </label>
                <label>
                    Usuário:
                    <input type="text" value={this.state.usuario} name="user" onChange={this.escrevendoUsuario}/>
                </label>
                <label>
                    E-mail:
                    <input type="email" value={this.state.email} name="email" onChange={this.escrevendoEmail}/>
                </label>
                <label>
                    CPF:
                    <input type="email" value={this.state.cpf} name="cpf" onChange={this.escrevendoCPF}/>
                </label>
                <label>
                    Senha:
                    <input type="password" value={this.state.senha} name="password" onChange={this.escrevendoSenha}/>
                </label>
                <label>
                    Confirmar Senha:
                    <input type="password" value={this.state.senhaConfirmada} name="confirm_password" onChange={this.escrevendoSenhaConfirmada}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
    
}