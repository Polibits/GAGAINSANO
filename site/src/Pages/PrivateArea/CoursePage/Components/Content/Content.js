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
            </div>
        );
    }
}

export default Content;