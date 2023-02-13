import React from 'react';
import Stars from '../../../InitialPage/Components/StarsBackground/Stars';

import material_01 from '../Body/imgs/material_01.png';
import material_02 from '../Body/imgs/material_02.png';
import material_03 from '../Body/imgs/material_03.png';
import material_04 from '../Body/imgs/material_04.png';

import './Body.css';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Stars></Stars>
                <main class='corpo'>
                    <section>
                        <h1>MATERIAIS GRATUITOS</h1>
                        <p class='basic_text'>Que tal receber uma amostra de nossos materiais?</p>
                        <div class='img_container'>
                            <img src={material_01} class='post_img'></img>
                            <img src={material_02} class='post_img'></img>
                            <img src={material_03} class='post_img'></img>
                            <img src={material_04} class='post_img'></img>
                        </div>
                        <p class='basic_text'>Veja com teus próprios olhos a qualidade de nosso trabalho!</p>
                    </section>
                    <section>
                        <div class='send_container'>
                            <h1>RECEBA AGORA!</h1>
                            <form>
                                <fieldset class='fields'>
                                    <p class='send_text'>NOME</p>
                                    <input type={'text'} required name='name' placeholder='Digite seu nome'/>
                                    <p class='send_text'>EMAIL</p>
                                    <input type={'text'} required name='email' placeholder='Digite seu email'/>
                                    <button class='send_button'>ENVIAR</button>
                                </fieldset>
                            </form>
                        </div>
                        
                    </section>
                </main>
            </>
        );
        
    }
}

export default Body;