import React from "react";
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import NavigationBar from "../../Common Components/NavigationBar/NavigationBar";
import './FreeContent.css';
import './../../GlobalStyle.css';

class FreeContent extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='FreeContentPage'>
                <div id='PageContent'>
                    <NavigationBar />
                    <h1>Materiais Gratuitos</h1>
                </div>
                <div id='PageBackground'>
                    <StarsBackground />
                </div>
            </div>
        );
    }
}

export default FreeContent;