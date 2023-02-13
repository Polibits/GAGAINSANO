import React from 'react';
import HeaderInicial from '../InitialPage/Components/NavBar/HeaderInicial';
import HeaderMenor from '../InitialPage/Components/NavBar/HeaderMenor';
import Footer from '../InitialPage/Components/Footer/Footer';
import Body from './Components/Body/Body';

class MateriaisGratuitos extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <HeaderInicial/>
                <HeaderMenor/>
                <Body></Body>
                <Footer/>
            </>
        );
    }
}

export default MateriaisGratuitos;