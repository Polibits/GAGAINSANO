import React from "react";

import logo_img from './Logo.png';
import './Logo.css';

class Logo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <div className="logo_div">
                    <h1 className='triunfal_title'>GAGÁ INSANO</h1>
                    <img className="triunfal_logo" src={logo_img}></img>
                </div>
                <h3>PREPARE-SE COM OS MELHORES!</h3>
            </>
        );
    }
}

export default Logo;