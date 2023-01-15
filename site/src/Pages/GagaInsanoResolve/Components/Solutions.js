import React from 'react';
import './Solutions.css';
import Stars from '../../InitialPage/Components/StarsBackground/Stars';

class Solutions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main className='Solutions'>
                <Stars />
                <h1>Gagá Insano Resolve</h1>
                <p className='SubtituloResolve'>
                    Aqui você encontra as nossas resoluções das provas de vestibulares e olimpíadas
                </p>
                <div className='testBlock'>
                    <p><strong>Prova:</strong> {this.props.Vest}</p>
                    <p><strong>Ano:</strong> {this.props.Ano}</p>
                </div>
                <div className='noFlexSolutions'>
                    <section>
                        <form>
                            <label><input type={'radio'} name='subject' value={'Voltar'} onClick={this.props.clickHandler}/>Voltar</label>
                            <label><input type={'radio'} name='subject' value={'FÍSICA'}/>FÍSICA</label>
                            <label><input type={'radio'} name='subject' value={'QUÍMICA'}/>QUÍMICA</label>
                            <label><input type={'radio'} name='subject' value={'BIOLOGIA'}/>BIOLOGIA</label>
                            <label><input type={'radio'} name='subject' value={'MATEMÁTICA'}/>MATEMÁTICA</label>
                            <label><input type={'radio'} name='subject' value={'PORTUGUÊS'}/>PORTUGUÊS</label>
                            <label><input type={'radio'} name='subject' value={'INGLÊS'}/>INGLÊS</label>
                            <label><input type={'radio'} name='subject' value={'HISTÓRIA'}/>HISTÓRIA</label>
                            <label><input type={'radio'} name='subject' value={'GEOGRAFIA'}/>GEOGRAFIA</label>
                        </form>
                    </section>
                    <div className='separador' />
                    <section>
                        <ul className='questoes'>
                            <li><span>01</span></li>
                            <li><span>02</span></li>
                            <li><span>03</span></li>
                            <li><span>04</span></li>
                            <li><span>05</span></li>
                            <li><span>06</span></li>
                            <li><span>07</span></li>
                            <li><span>08</span></li>
                            <li><span>09</span></li>
                            <li><span>10</span></li>
                        </ul>
                    </section>
                </div>
            </main>
        );
    }
}

export default Solutions;