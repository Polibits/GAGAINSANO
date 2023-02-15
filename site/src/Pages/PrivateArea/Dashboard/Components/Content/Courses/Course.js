import React from "react";

import './Course.css';

class Course extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CourseItem">
                <div>
                    <img src={this.props.img}></img>
                </div>
                <div>
                    <h1> {this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <p>ir para curso</p>
                </div>
            </div>
        );
    }
}

export default Course;