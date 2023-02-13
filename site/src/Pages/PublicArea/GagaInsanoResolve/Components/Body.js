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
                        <li onClick={() => {this.props.clickHandler('FUVEST')}}>FUVEST</li>
                        <li onClick={() => {this.props.clickHandler('UNICAMP')}}>UNICAMP</li>
                        <li onClick={() => {this.props.clickHandler('ENEM')}}>ENEM</li>
                        <li onClick={() => {this.props.clickHandler('ITA')}}>ITA</li>
                        <li onClick={() => {this.props.clickHandler('IME')}}>IME</li>
                        <li onClick={() => {this.props.clickHandler('AFA')}}>AFA</li>
                        <li onClick={() => {this.props.clickHandler('EFOM')}}>EFOM</li>
                        <li onClick={() => {this.props.clickHandler('OBF')}}>OBF</li>
                        <li onClick={() => {this.props.clickHandler('OBQ')}}>OBQ</li>
                        <li onClick={() => {this.props.clickHandler('OBM')}}>OBM</li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Body;