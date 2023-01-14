import React from 'react';
import './Body.css';
import Stars from '../../InitialPage/Components/StarsBackground/Stars';

class Body extends React.Component{
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
                        <li onClick={this.props.clickHandler}>FUVEST</li>
                        <li onClick={this.props.clickHandler}>UNICAMP</li>
                        <li onClick={this.props.clickHandler}>ENEM</li>
                        <li onClick={this.props.clickHandler}>ITA</li>
                        <li onClick={this.props.clickHandler}>IME</li>
                        <li onClick={this.props.clickHandler}>AFA</li>
                        <li onClick={this.props.clickHandler}>EFOM</li>
                        <li onClick={this.props.clickHandler}>OBF</li>
                        <li onClick={this.props.clickHandler}>OBQ</li>
                        <li onClick={this.props.clickHandler}>OBM</li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Body;