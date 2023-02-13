import React from 'react';

import HeaderInicial from './Components/NavBar/HeaderInicial';
import HeaderMenor from './Components/NavBar/HeaderMenor';
import CorpoInicial from './Components/Body/Body';
import FooterInicial from './Components/Footer/Footer';

class PaginaInicial extends React.Component{
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

export default PaginaInicial;