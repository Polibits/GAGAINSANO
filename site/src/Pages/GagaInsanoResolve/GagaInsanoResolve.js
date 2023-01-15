import React from 'react';
import HeaderInicial from '../InitialPage/Components/NavBar/HeaderInicial';
import HeaderMenor from '../InitialPage/Components/NavBar/HeaderMenor';
import Footer from '../InitialPage/Components/Footer/Footer';
import Body from './Components/Body';
import Years from './Components/Years';
import Solutions from './Components/Solutions';

class GagaInsanoResolve extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Pagina: 0,
            Vestibular: '',
            Ano: 0
        };
        this.alterarPagina = this.alterarPagina.bind(this);
        this.alterarPagina2 = this.alterarPagina2.bind(this);
    }
    alterarPagina(vest){
        (this.state.Pagina === 1) ? this.setState((state, props) => {return {Pagina: 0, Vestibular: ''};}) : this.setState((state, props) => {return {Pagina: 1, Vestibular: vest};});
    }
    alterarPagina2(ano){
        if(this.state.Pagina === 1){
            this.setState((state, props) => {return {Pagina: 2, Ano: ano};});
        }
        else if(this.state.Pagina === 2){
            this.setState((state, props) => {return {Pagina: 1, Ano: 0};});
        }
    }
    render(){
        return(
            <>
                <HeaderInicial />
                <HeaderMenor />
                {(this.state.Pagina === 0) 
                ? <Body clickHandler={this.alterarPagina}/> 
                : (this.state.Pagina === 1) 
                ? <Years clickHandler={this.alterarPagina} clickHandler2={this.alterarPagina2}  />
                : <Solutions clickHandler={this.alterarPagina2} Ano={this.state.Ano} Vest={this.state.Vestibular} />}
                <Footer />
            </>
        );
    }
}

export default GagaInsanoResolve;