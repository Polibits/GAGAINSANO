import React from 'react';
import HeaderInicial from '../Components/NavBar/HeaderInicial';
import HeaderMenor from '../Components/NavBar/HeaderMenor';
import Footer from '../Components/Footer/Footer';

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