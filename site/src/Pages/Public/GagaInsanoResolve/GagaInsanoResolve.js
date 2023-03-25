import React from "react";
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import NavigationBar from "../../Common Components/NavigationBar/NavigationBar";
import './GagaInsanoResolve.css';
import './../../GlobalStyle.css';

class GagaInsanoResolve extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='GagaInsanoResolvePage'>
                <div id='PageContent'>
                    <NavigationBar/>
                    <h1>GagaInsanoResolvePage</h1>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

export default GagaInsanoResolve;