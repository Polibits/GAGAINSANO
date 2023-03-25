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
            <div className='Page' id='HomePage'>
                <div id='PageContent'>
                    <NavigationBar/>
                    <TriunfalLogo/>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
                
                
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
            <div className='TriunfalLogoContainer'>
                <div className="TriunfalLogo">
                    <h1 className="TriunfalTitle">GAGÁ INSANO</h1>
                    <img src={Logo}></img>
                    <p>prepare-se com os melhores</p>
                </div>
            </div>
            
        );
    }
}

export default InitialPage;