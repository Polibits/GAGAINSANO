import React from "react";

import example_img from '../../../../Dashboard/Components/LateralMenu/Profile/profile_picture.png';

import Course from './Course.js';

class Courses extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Cursos</h1>
                <Course name='Física para Militares' img={example_img} description='desde mecânica clássica até física moderna!'></Course>
                <Course name='ENEM/Fuvest' img={example_img} description='desde mecânica clássica até física moderna!'></Course>
            </div>
        );
    }
}

export default Courses;