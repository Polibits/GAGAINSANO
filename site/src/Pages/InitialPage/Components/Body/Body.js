import React from 'react';
import './Body.css';
import './Vestibulares.css';

import Stars from '../StarsBackground/Stars';
import logo from "../../Assets/Logo.png";
import ITA_logo from "../Body/Vestibulares/ITA.jpg";
import IME_logo from "../Body/Vestibulares/IME.png";
import FUVEST_logo from "../Body/Vestibulares/FUVEST.jpg";
import ENEM_logo from "../Body/Vestibulares/ENEM.jpg";
import OBM_logo from "../Body/Vestibulares/OBM.jpg";
import OBF_logo from "../Body/Vestibulares/OBF.jpg";


import IME_resolucao_01 from "../Body/Resoluções/IME_01.jpg";

class CorpoInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='corpo'>
                <Stars />
                
                <div class='main_logo'>
                    <h1 class='titulo'>GAGÁ INSANO</h1>
                    <img src={logo}></img>
                </div>
                <h3 class='logo_subtitle'>PREPARE-SE COM OS MELHORES!</h3>
                <section className='introducao'>
                    <div className='flex2'>
                        <div className='flex'>
                            <article className='militares'>
                                Cursos completos, voltados a preparações para vestibulares militares - ITA, IME, AFA, EFOM -, vestibulares tradicionais - FUVEST, ENEM -, e olimpíadas de exatas - OBM, OBF, OBQ.
                            </article>
                            <div class='vestibulares_main_container'>
                                <div class='militares_imgs_container'>
                                    <h3>VESTIBULARES MILITARES</h3>
                                    <img src={ITA_logo} class='ITA_logo'></img>
                                    <img src={IME_logo} class='IME_logo'></img>

                                </div>
                                <div class='civis_imgs_container'>
                                    <h3>VESTIBULARES CIVIS</h3>
                                    <img src={FUVEST_logo} class='FUVEST_logo'></img>
                                    <img src={ENEM_logo} class='ENEM_logo'></img>
                                </div>
                                <div class='olimpíadas_imgs_container'>
                                    <h3>OLIMPÍADAS</h3>
                                    <img src={OBM_logo} class='OBM_logo'></img>
                                    <img src={OBF_logo} class='OBF_logo'></img>
                                </div>
                            </div>
                            <article className='imaginar'>
                                Imagine escapar da superficialidade, não se prender a apenas decorar fórmulas, como é de costume, e, ao invés disso, alcançar um entendimento sólido dos assuntos mais complexos de física, química e matemática.
                            </article>
                            <div>
                                <img src={IME_resolucao_01}></img>
                            </div>
                            <article className='preparado'>
                                Aqui, você encontra cursos completos, em que trazemos o embasamento teórico necessário e o aprofundamento nos assuntos para que você, ao final da preparação, esteja preparado para enfrentar as provas mais difíceis!
                            </article>
                        </div>
                    </div>
                </section>
                <section className='sobreNos1'>
                    <h2>Quem somos?</h2>
                    <div className='flex2'>
                        <div className='flex'>
                            <article className='quemSomos'>
                                O Gagá Insano é um preparatório online, que surgiu de uma iniciativa de alunos motivados a revolucionar o ensino de exatas no Brasil, ao trazer maior profundidade nos conteúdos e um carinho especial com os conceitos.
                            </article>
                            <article className='numeros'>
                                Hoje, temos uma comunidade muito ativa. São mais de 30 mil seguidores na página principal do instagram e esse número não para de crescer!
                            </article>
                        </div>
                        <p className='citacao'>
                                <span className='italico'>"Buscar e aprender, na realidade, não são mais do que recordar"</span>
                                <br /> - Platão
                        </p>
                    </div>
                </section>
                <section className='sobreNos2'>
                    <h2>Qual a nossa metodologia?</h2>
                    <ul className='metodologia'>
                        <li>
                            <article>
                                <h3>Vídeo-aulas ao vivo</h3>
                                Tenha aulas incríveis com já experiente em preparações militares e civis <br />
                                Todas completíssimas e com objetivo de deixar o aluno no nível da banca do vestiular
                            </article>
                        </li>
                        <li>
                            <article>
                                <h3>Resoluções detalhadas</h3>
                                Acreditamos que um bom estudo necessita de resoluções ricas em detalhe <br />
                                Por isso, contamos com resoluções com alto padrão de qualidade
                            </article>
                        </li>
                        <li>
                            <article>
                                <h3>Listas de questões</h3>
                                Prepare-se com listas de exercícios autorais, com questões inéditas e <br />
                                Compatíveis com a complexidade dos vestibulares
                            </article>
                        </li>
                        <li>
                            <article>
                                <h3>Simulados</h3>
                                Nossos simulados imitam as provas dos vestibulares, afinal não há <br />
                                Nada melhor para se preparar do que fazer provas do mesmo estilo dos vestibulares
                            </article>
                        </li>
                        <li>
                            <article>
                                <h3>Grupos de discussão</h3>
                                Oferecemos grupos de tirada de dúvidas com os professores, a fim de <br />
                                Ajudar o aluno com problems conceituais, de organizção e de estudos
                            </article>
                        </li>
                    </ul>
                </section> 
            </main>
        );
    }
}

class Carrossel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className='carrossel'>

            </div>
        );
    }
}

export default CorpoInicial;