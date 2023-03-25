import React from "react";
import './../../GlobalStyle.css';
import './NavigationBar.css';

import { Link } from "react-router-dom";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <header>
                <nav id='PublicAreaNavBar'>
                    <ul>
                        <li><Link to='/home'>Início</Link></li>
                        <li><Link to='/cursos'>Cursos</Link></li>
                        <li><Link to='/materiaisgratuitos'>Materiais Gratuitos</Link></li>
                        <li><Link to='/gagainsanoresolve'>Gagá Insano Resolve</Link></li>
                        <li><Link to='/login'>Acessar</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default NavigationBar;