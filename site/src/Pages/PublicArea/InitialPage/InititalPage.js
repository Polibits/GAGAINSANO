import React from 'react';

import HeaderInicial from './Components/NavBar/HeaderInicial';
import HeaderMenor from './Components/NavBar/HeaderMenor';
import Body from './Components/Body/Body';
import FooterInicial from './Components/Footer/Footer';

import 'D:\\Projetos\\POLIBITS\\GAGÁ INSANO\\Frontend\\GAGAINSANO\\site\\src\\Pages\\PublicArea\\general.css';

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