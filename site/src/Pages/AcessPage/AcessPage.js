import React from 'react';
import './Components/ComponentName/style.css';

class PaginaInicial extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return (
        <div>
            <HeaderInicial />
            <CorpoInicial />
            <FooterInicial />
        </div>
    );
    }
}
  
class HeaderInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header>
                <div className='logo'>Gagá Insano</div>
                <nav>
                    <ul className='ulNav'>
                        <li>Cursos</li>
                        <li>Olimpíadas</li>
                        <li>Materiais Gratuitos</li>
                        <li>Gagá Insano Resolve</li>
                        <li><button className='acesso'>Acessar</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

class CorpoInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='corpo'>
                <ul className='estrelas'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h1 className='titulo'>Sobre o Gagá Insano</h1>
                <section className='conteudo'>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <article className='card'>
                        
                    </article>
                </section>
            </main>
        );
    }
}

class FooterInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <ul className='ulFooter'>
                    <li>
                        Exploração:
                        <ul>
                            <li>Cursos</li>
                            <li>Olimpíadas</li>
                            <li>Materiais Gratuitos</li>
                            <li>Gagá Insano Resolve</li>
                        </ul>
                    </li>
                    <li>
                        Siga-nos nas redes sociais:
                        <ul>
                            <li>Instagram</li>
                            <li>Linkedin</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </li>
                    <li>
                        Explore nossos planos:
                        <ul>
                            <li>Turma ITA</li>
                            <li>Turma IME</li>
                            <li>ENEM tunado</li>
                        </ul>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default PaginaInicial;