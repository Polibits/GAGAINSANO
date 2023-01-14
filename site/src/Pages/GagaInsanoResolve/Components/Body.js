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
                        <li>FUVEST</li>
                        <li>UNICAMP</li>
                        <li>ENEM</li>
                        <li>ITA</li>
                        <li>IME</li>
                        <li>OBF</li>
                        <li>OBQ</li>
                        <li>{window.innerWidth}</li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Body;