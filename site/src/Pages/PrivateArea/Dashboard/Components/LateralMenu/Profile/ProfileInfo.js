import React from "react";
import './ProfileInfo.css';

import profilePicture from './profile_picture.png';

class ProfileInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="lateralMenuProfileDiv">
                <h1 className="profileName">{this.props.username}</h1>
                <div className="profilePictureContainer">
                    <img className="profilePicture" src={profilePicture}></img>
                </div>
                <h2>{this.props.userType}</h2>
            </div>
        );
    }
}

export default ProfileInfo;