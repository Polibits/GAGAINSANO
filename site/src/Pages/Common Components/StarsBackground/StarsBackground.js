import React from 'react';
import './StarsBackground.scss';

class Stars extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div id="StarsBackground">
                <div className="sub-container">
                    <div className="sky">
                        <div className="stars"></div>
                        <div className="stars2"></div>
                        <div className="stars3"></div>
                        <div className="comet"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stars;