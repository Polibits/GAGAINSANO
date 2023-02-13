import React from 'react';
import './StarsBackground.scss';

class Stars extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div class="main-container">
                <div class="sub-container">
                    <div class="sky">
                        <div class="stars"></div>
                        <div class="stars2"></div>
                        <div class="stars3"></div>
                        <div class="comet"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stars;