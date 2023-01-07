import React from 'react';
import './Components/ComponentName/styleInitialPage.css';
import HeaderInicial from './HeaderInicial';
import HeaderMenor from './HeaderMenor';

class PaginaInicial extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
    return (
        <div>
            <HeaderInicial />
            <HeaderMenor />
            <CorpoInicial />
            <FooterInicial />
        </div>
    );
    }
}

class CorpoInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='corpo'>
                <ul className='estrelas'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <h1 className='titulo'>Gagá Insano</h1>
                <section className='introducao'>
                    <h2>Prepare-se Com os Melhores!</h2>
                    <div className='flex2'>
                        <div className='flex'>
                            <article className='militares'>
                                Cursos completos, voltados a preparações para <br />
                                vestibulares militares - ITA, IME, AFA, EFOM -, <br />
                                vestibulares tradicionais - FUVEST, ENEM -, <br />
                                e olimpíadas de exatas - OBM, OBF, OBQ.
                            </article>
                            <article className='imaginar'>
                                Imagine escapar da superficialidade, não se prender a<br />
                                apenas decorar fórmulas, como é de costume, <br />
                                e, ao invés disso, alcançar um entendimento sólido <br />
                                dos assuntos mais complexos de física, química e matemática.
                            </article>
                            <article className='preparado'>
                                Aqui, você encontra cursos completos, em que <br />
                                trazemos o embasamento teórico necessário e o <br />
                                aprofundamento nos assuntos para que você, ao <br />
                                final da preparação, esteja preparado para <br />
                                enfrentar as provas mais difíceis!
                            </article>
                        </div>
                        <Carrossel />
                    </div>
                </section>
                <section className='sobreNos1'>
                    <h2>Quem somos?</h2>
                    <div className='flex2'>
                        <div className='flex'>
                            <article className='quemSomos'>
                                O Gagá Insano é um preparatório online, <br />
                                que surgiu de uma iniciativa de alunos motivados a <br />
                                revolucionar o ensino de exatas no Brasil, ao <br />
                                trazer maior profundidade nos conteúdos e <br />
                                um carinho especial com os conceitos.
                            </article>
                            <article className='numeros'>
                                Hoje, temos uma comunidade muito ativa. <br />
                                São mais de 30 mil seguidores na página principal do <br />
                                instagram e esse número não para de crescer!
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

class FooterInicial extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <ul className='ulFooter'>
                    <li>
                        <ul>
                            <li>Menu:</li>
                            <li>Cursos</li>
                            <li>Olimpíadas</li>
                            <li>Materiais Gratuitos</li>
                            <li>Gagá Insano Resolve</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Redes Sociais:</li>
                            <li>Instagram</li>
                            <li>Telegram</li>
                            <li>Whatsapp</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>Nossos Cursos:</li>
                            <li>Turma ITA</li>
                            <li>Turma IME</li>
                            <li>ENEM tunado</li>
                        </ul>
                    </li>
                </ul>
            </footer>
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

export default PaginaInicial;