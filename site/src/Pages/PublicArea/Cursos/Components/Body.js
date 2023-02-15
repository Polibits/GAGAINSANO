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
                <main className='corpoCursos'>
                    <h1>CURSOS</h1>
                    <p class='basic_text'>
                        O GAGÁ INSANO traz uma série de cursos completíssimos, que abrangem desde a base até o aprofundamento!
                        Produzimos o conteúdo com o objetivo de evoluir o aluno até o nível da prova de seu desejo, a fim de que esteja preparado, traquilo e confiante para qualquer que seja o desafio. 
                    </p>
                    
                </main>
            </>
        );
    }
}

export default Body; 