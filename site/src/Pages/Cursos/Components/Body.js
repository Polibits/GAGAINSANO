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
                    <ul>
                        <li>
                            <section>
                                <div>
                                    <h2>GAGÁ INSANO MILITARES</h2>
                                    <p>
                                        Prepare-se para as provas militares mais complexas da 
                                        melhor forma possível, com apoio da estrutura completa 
                                        do GAGÁ INSANO. Esteja ao nível da banca de vestibulares 
                                        como AFA, Espcex, ITA e IME.
                                        Com a experiência dos professores, já muito familiarizados 
                                        com esse estilo de prova, e com os conteúdos dados no curso, 
                                        você estará ao nível necessário para conquistar sua tão 
                                        sonhada aprovação!
                                    </p>
                                </div>
                                <button>Assinar</button>
                            </section>
                        </li>
                        <li>
                            <section>
                                <div>
                                    <h2>GAGÁ INSANO VESTIBULARES</h2>
                                    <p>
                                        Obtenha uma base sólida de conhecimentos e seja aprovados 
                                        nas melhores universidades e instituições de ensino 
                                        superior do Brasil! Aqui, oferecemos conteúdo muito 
                                        bem direcionado para os vestibulares tradicionais do 
                                        país, como ENEM, FUVEST, UNICAMP, UNESP e universidades 
                                        federais, com profundidade e maestria, por meio de 
                                        nossas aulas completas e ricas em matéria.
                                    </p>
                                </div>
                                <button>Assinar</button>
                            </section>
                        </li>
                        <li>
                            <section>
                                <div>
                                    <h2>OLIMPÍADAS</h2>
                                    <p>
                                        Conquiste suas medalhas com apoio do GAGÁ INSANO!
                                        Imagine desfrutar de aulas avançadas, com conteúdo 
                                        de aprofundamento para sua olimpíada que se baseia 
                                        nos melhores livros da atualidade...
                                        Aqui, não temos medo de ofertar o que há de 
                                        melhor aos nosso alunos dos grandes autores: IRODOV, 
                                        KOSEL, HIBBELER, MORIN etc.
                                    </p>
                                </div>
                                <button>Assinar</button>
                            </section>
                        </li>
                        <li>
                            <section>
                                <div>
                                    <h2>ENSINO SUPERIOR</h2>
                                    <p>
                                        Aprenda os tópicos mais difíceis da 
                                        faculdade sem medo! O GAGÁ INSANO 
                                        traz a melhor solução para as matérias 
                                        complexas dos cursos de engenharia 
                                        e física. Aprenda conosco:
                                        <ul>
                                            <li>Mecânica Geral</li>
                                            <li>Mecânica Analitica</li>
                                            <li>Termodinâmica Aplicada</li>
                                            <li>Mecânica dos Fluidos</li>
                                        </ul>
                                        Com nosso curso, você estará preparado 
                                        para enfrentar as questões e as provas, 
                                        qualquer que seja o grau de dificuldade; 
                                        oferecemos aulas, exercícios, experimentos 
                                        e resumos teóricos como parte de um estudo 
                                        consistente e de alto grau de qualidade. 
                                        Torne-se o melhor aluno de sua turma!
                                    </p>
                                </div>
                                <button>Assinar</button>
                            </section>
                        </li>
                    </ul>
                </main>
            </>
        );
    }
}

export default Body; 