import React from 'react';
import './Footer.css';
import logo from "../../Assets/Logo.png";

class FooterInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                
                <ul className='ulFooter'>
                    <div class='footer_logo'>
                        <img src={logo} ></img>
                    </div>
                    
                    <li>
                        <ul>
                            <li>MENU</li>
                            <li>Cursos</li>
                            <li>Olimpíadas</li>
                            <li>Materiais Gratuitos</li>
                            <li>Gagá Insano Resolve</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>REDES SOCIAIS</li>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>NOSSOS CURSOS</li>
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