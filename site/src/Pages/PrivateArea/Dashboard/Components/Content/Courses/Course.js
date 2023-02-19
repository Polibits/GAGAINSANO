import React from "react";

import './Course.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CourseItem">
                <div className="CourseImg">
                    <img src={this.props.img}></img>
                </div>
                <div className="CourseDescription">
                    <h2> {this.props.name}</h2>
                    <p>{this.props.description}</p>
                    <p>ir para curso</p>
                </div>
            </div>
        );
    }
}

export default Course;