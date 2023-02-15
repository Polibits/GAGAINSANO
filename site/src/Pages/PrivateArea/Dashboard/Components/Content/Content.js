import React from "react";

import Courses from './Courses/Courses.js';
import Profile from './Profile/Profile.js'

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Profile></Profile>
            </div>
        );
    }
}

export default Content;