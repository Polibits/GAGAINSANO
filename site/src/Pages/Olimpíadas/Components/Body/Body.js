import React from 'react';

import '../Body/Body.css';

import OBF from '../Body/Assets/OBF.jpg';
import OBQ from '../Body/Assets/OBQ.jpg';

import irodov from '../Body/Assets/física/irodov.png';
import kosel from '../Body/Assets/física/kosel.jpg';
import saraeva from '../Body/Assets/física/saraeva.jpg';
import morin from '../Body/Assets/física/morin.jpg';


import atkins from '../Body/Assets/Química/Atkins.jpg';
import russel from '../Body/Assets/Química/Russel.jpg';
import feltre1 from '../Body/Assets/Química/Feltre1.jpg';
import feltre2 from '../Body/Assets/Química/Feltre2.jpg';
import feltre3 from '../Body/Assets/Química/Feltre3.jpg';
import solomons from '../Body/Assets/Química/Solomons.jpg';
import mahan from '../Body/Assets/Química/Mahan.jpg';

import './Body.css';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='corpo'>
                <section>
                    <h1>PREPARAÇÃO OLÍMPICA</h1>
                    <p>Conquiste suas medalhas com apoio do GAGÁ INSANO!</p>
                    <p>Imagine desfrutar de aulas avançadas, com conteúdo de aprofundamento para sua olimpíada que se baseia nos melhores livros da atualidade...</p>
                    <p>Aqui, não temos medo de ofertar o que há de melhor aos nosso alunos dos grandes autores: IRODOV, KOSEL, HIBBELER, MORIN etc.</p>
                    
                </section>
                <section>
                    <h1>OBF</h1>
                    <p>Contéudo avançado para nossa querida Olimpíada Brasileira de Física!</p>
                    <div class='img_container'>
                        <img class='OlympiadImage' src={OBF}></img>
                    </div>
                    <p>o GAGÁ INSANO oferece conteúdo altamente especializado no ensido de física, com uma didática única e em grande profundidade</p>
                    <p>para tal desafio, que tal contar com a melhor bibliografia possível? Aqui, usamos os clássicos da física olímpica: IRODOV, KOSEL, SARAEVA, MORIN etc.</p>
                    <div>
                        <img class='book' src={irodov}></img>
                        <img class='book' src={kosel}></img>
                        <img class='book' src={saraeva}></img>
                        <img class='book' src={morin}></img>
                    </div>
                </section>
                <section>
                    <h1>OBQ</h1>
                    <p>Preparação completa para Olimpíada Brasileira de Química!</p>
                    <div class='img_container'>
                        <img class='OlympiadImage' src={OBQ}></img>
                    </div>
                    <div>
                        <img class='book' src={atkins}></img>
                        <img class='book' src={russel}></img>
                        <img class='book' src={feltre1}></img>
                        <img class='book' src={feltre2}></img>
                        <img class='book' src={feltre3}></img>
                        <img class='book' src={solomons}></img>
                        <img class='book' src={mahan}></img>
                    </div>
                    <p>Não fique na superficialidade. Conte com o GAGÁ INSANO para se aprofundar em toda a química das olimpíadas</p>
                    <p>Oferecemos um estudo completo, que abrange as áreas mais críticas e complicadas da química</p>
                </section>
            </main>
            
        );
    }
}

export default Body;