import React from 'react';

import HeaderInicial from './Components/NavBar/HeaderInicial';
import HeaderMenor from './Components/NavBar/HeaderMenor';
import Body from './Components/Body/Body';
import FooterInicial from './Components/Footer/Footer';

import './../general.css';

class InitialPage extends React.Component{
    render(){
        return (
            <div>
                <HeaderInicial />
                <HeaderMenor />
                <Body />
                <FooterInicial />
            </div>
        );
    }
}

export default InitialPage;