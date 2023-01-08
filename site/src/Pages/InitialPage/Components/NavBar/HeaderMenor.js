import React from 'react';
import './NavBar.css';
import './LateralMenu.css';
import logo from "../../Assets/Logo.png";
import { Link } from 'react-router-dom';

class HeaderMenor extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header className='headerMenor'>
                <nav>
                    <div className='menuLateral'><MenuLateral /></div>
                    <img className='logo' src={logo}/>
                    <ul>
                        <li><button className='acesso'>Acessar</button></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

class MenuLateral extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <ul className='iconeMenu'>
                    <li></li>
                    <li></li>
                    <li><button /></li>
                </ul>
                <div className='hiddenMenu'>
                    <ul>
                        <li><Link to='/cursos'>Cursos</Link></li>
                        <li><Link to='/olimpiadas'>Olimpíadas</Link></li>
                        <li><Link to ='/MateriaisGratuitos'>Materiais Gratuitos</Link></li>
                        <li><Link to='/GagaInsanoResolve'>Gagá Insano Resolve</Link></li>
                    </ul>
                </div>
            </>
        );
    }
}



export default HeaderMenor;