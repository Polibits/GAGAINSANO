import React from "react";

import './Content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CoursePageContentDiv">
                <h1>{this.props.title}</h1>
                <div className="CoursePageVideoDiv">
                    <video src={this.props.src} controls></video>
                </div>
            </div>
        );
    }
}

export default Content;