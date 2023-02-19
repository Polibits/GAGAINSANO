import React from "react";

import './Content.css';

import Courses from './Courses/Courses.js';
import Profile from './Profile/Profile.js'

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ContentMainDiv">
                <div className="Contents">
                    <Courses></Courses>
                </div>
                
            </div>
        );
    }
}

export default Content;