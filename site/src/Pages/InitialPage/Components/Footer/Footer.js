import React from 'react';
import './Footer.css';

class FooterInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <ul className='ulFooter'>
                    <li>
                        <ul>
                            <li>Menu:</li>
                            <li>Cursos</li>
                            <li>Olimpíadas</li>
                            <li>Materiais Gratuitos</li>
                            <li>Gagá Insano Resolve</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Redes Sociais:</li>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Nossos Cursos:</li>
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
    
export default FooterInicial;