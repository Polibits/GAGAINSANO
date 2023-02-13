import React from 'react';
import './Footer.css';
import logo from "../../Assets/Logo.png";
import { Link } from 'react-router-dom';

class FooterInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                
                <ul className='ulFooter'>
                    <li class='footer_logo'>
                        <img src={logo} ></img>
                    </li>
                    <li>
                        <ul>
                            <li>MENU</li>
                            <li><Link to='/cursos'>Cursos</Link></li>
                            <li><Link to='/olimpiadas'>Olimpíadas</Link></li>
                            <li><Link to='/MateriaisGratuitos'>Materiais Gratuitos</Link></li>
                            <li><Link to='/GagaInsanoResolve'>Gagá Insano Resolve</Link></li>
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