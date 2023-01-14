import React from 'react';
import HeaderInicial from '../InitialPage/Components/NavBar/HeaderInicial';
import HeaderMenor from '../InitialPage/Components/NavBar/HeaderMenor';
import Footer from '../InitialPage/Components/Footer/Footer';
import Body from './Components/Body';
import Years from './Components/Years';

class GagaInsanoResolve extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            anos: false
        };
        this.alterarAnos = this.alterarAnos.bind(this);
    }
    alterarAnos(){
        this.state.anos = (this.state.anos) ? false : true;
        this.forceUpdate();
    }
    render(){
        return(
            <>
                <HeaderInicial />
                <HeaderMenor />
                {(this.state.anos) ? <Years clickHandler={this.alterarAnos}/> : <Body clickHandler={this.alterarAnos}/>}
                <Footer />
            </>
        );
    }
}

export default GagaInsanoResolve;