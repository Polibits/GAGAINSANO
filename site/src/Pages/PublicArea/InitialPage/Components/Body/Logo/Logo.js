import React from "react";

import logo_img from './Logo.png';
import './Logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="intro_logo">
                <div className="logo_div">
                    <h1 className='triunfal_title'>GAGÁ INSANO</h1>
                    <img className="triunfal_logo" src={logo_img}></img>
                </div>
                <p>PREPARE-SE COM OS MELHORES!</p>
            </div>
        );
    }
}

export default Logo;