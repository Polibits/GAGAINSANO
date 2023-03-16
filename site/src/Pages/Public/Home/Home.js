import React from "react";

import Logo from './../../../content/Logo.png';
import NavigationBar from "../../Common Components/NavigationBar/NavigationBar";
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';

import './../../GlobalStyle.css';
import './Home.css';

class InitialPage extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='InitialPage'>
                <NavigationBar/>
                <TriunfalLogo/>
                <StarsBackground/>
            </div>
        );
    }
}

class TriunfalLogo extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='TriunfalLogo'>
                <h1 className="TriunfalTitle">GAGÁ INSANO</h1>
                <img src={Logo}></img>
                <p>prepare-se com os melhores</p>
            </div>
            
        );
    }
}

export default InitialPage;