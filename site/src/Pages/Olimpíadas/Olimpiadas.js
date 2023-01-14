import React from 'react';
import HeaderInicial from '../InitialPage/Components/NavBar/HeaderInicial';
import HeaderMenor from '../InitialPage/Components/NavBar/HeaderMenor';
import Footer from '../InitialPage/Components/Footer/Footer';

class Olimpiadas extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <HeaderInicial />
                <HeaderMenor />
                <Footer />
            </>
        );
    }
}

export default Olimpiadas;