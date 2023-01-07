import React from 'react';
import './Components/ComponentName/styleHeaders.css';
import logo from "./Assets/Logo.png";

class HeaderInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className='headerInicial'>
                <nav>
                    <img className='logo' src={logo}/>
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

export default HeaderInicial;