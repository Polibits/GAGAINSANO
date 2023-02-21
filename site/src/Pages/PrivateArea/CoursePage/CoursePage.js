import React from "react";

import LateralMenu from "./Components/LateralMenu/LateralMenu.js";
import Content from "./Components/Content/Content.js";

import './CoursePage.css';

class CoursePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="CoursePageDiv">
                    <LateralMenu></LateralMenu>
                    <Content title='Capítulo 1'></Content>
                </div>
            </main>
        );
    }
}

export default CoursePage;