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
                        <li onClick={this.props.clickHandler}>Voltar</li>
                        <li>2023</li>
                        <li>2022</li>
                        <li>2021</li>
                        <li>2020</li>
                        <li>2019</li>
                        <li>2018</li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Years;