import React from 'react';
import './Body.css';
import Stars from '../../InitialPage/Components/StarsBackground/Stars';

class Years extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Stars />
                <main className='corpoResolve'>
                    <h1>Gagá Insano Resolve</h1>
                    <p className='SubtituloResolve'>
                        Aqui você encontra as nossas resoluções das provas de vestibulares e olimpíadas
                    </p>
                    <ul>
                        <li onClick={() => {this.props.clickHandler('')}}>Voltar</li>
                        <li onClick={() => {this.props.clickHandler2(2023)}}>2023</li>
                        <li onClick={() => {this.props.clickHandler2(2022)}}>2022</li>
                        <li onClick={() => {this.props.clickHandler2(2021)}}>2021</li>
                        <li onClick={() => {this.props.clickHandler2(2020)}}>2020</li>
                        <li onClick={() => {this.props.clickHandler2(2019)}}>2019</li>
                        <li onClick={() => {this.props.clickHandler2(2018)}}>2018</li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Years;