import React from "react";

import LateralMenu from "./Components/LateralMenu/LateralMenu.js";

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
                </div>
            </main>
        );
    }
}

export default CoursePage;