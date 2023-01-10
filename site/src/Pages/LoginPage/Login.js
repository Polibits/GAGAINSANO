import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main>
                <div className='box'>
                    <img className='logo' />
                    <h1>Seja bem vindo!</h1>
                    <hr />
                    <form>
                        <fieldset className='loginText'>
                            <input type={'text'} required name='username' placeholder='Digite seu nome'/>
                            <input type={'password'} required name='password' placeholder='Digite sua senha' />
                        </fieldset>
                        <fieldset className='buttons'>
                            <input type={'submit'} value='Acessar' />
                            <button>Esqueci minha senha</button>
                        </fieldset>
                    </form>
                    <footer>Não tem conta? <strong>Crie uma!</strong></footer>
                </div>
            </main>
        );
    }
}