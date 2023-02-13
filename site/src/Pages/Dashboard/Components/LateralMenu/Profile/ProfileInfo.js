import React from "react";
import './ProfileInfo.css';

import profilePicture from './profile_picture.png';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <h1>{this.props.username}</h1>
                <img className="profilePicture" src={profilePicture}></img>
            </div>
        );
    }
}

export default ProfileInfo;