import React from 'react';
import './Components/ComponentName/styleHeaders.css';
import logo from "./Assets/Logo.png";

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
                        <li>Cursos</li>
                        <li>Olimpíadas</li>
                        <li>Materiais Gratuitos</li>
                        <li>Gagá Insano Resolve</li>
                    </ul>
                </div>
            </>
        );
    }
}



export default HeaderMenor;