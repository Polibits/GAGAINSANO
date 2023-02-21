import React from "react";

import LateralMenu from "./Components/LateralMenu/LateralMenu.js";
import Content from "./Components/Content/Content.js";
import ChapterVideo from './Components/Content/Video/sexta fera.mp4';

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
                    <Content title='Capítulo 1' src={ChapterVideo}></Content>
                </div>
            </main>
        );
    }
}

export default CoursePage;