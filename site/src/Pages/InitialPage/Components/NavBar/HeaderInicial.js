import React from 'react';
import './NavBar.css';
import './LateralMenu.css';
import logo from "../../Assets/Logo.png";
import { Link } from 'react-router-dom';

class HeaderInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className='headerInicial'>
                <nav>
                    <Link to='/'><img className='logo' src={logo}/></Link>
                    <ul className='ulNav'>
                        <li><Link to='/cursos'>Cursos</Link></li>
                        <li><Link to='/olimpiadas'>Olimpíadas</Link></li>
                        <li><Link to ='/MateriaisGratuitos'>Materiais Gratuitos</Link></li>
                        <li><Link to='/GagaInsanoResolve'>Gagá Insano Resolve</Link></li>
                        <li><button className='acesso'>Acessar</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default HeaderInicial;