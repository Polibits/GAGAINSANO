import React from "react";

import StarsBackground from '../../../Common Components/StarsBackground/StarsBackground.js';

import '../../../GlobalStyle.css';
import './StudentCourses.css';

class StudentCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='StudentCoursesPage'>
                <div id='PageContent'>
                    <Lecture title='Aula 01 - Leis de Newton' src='https://www.youtube.com/embed/6sBkmAlJlvs'/>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

class Lecture extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Lecture">
                <div className="LectureBox">
                    <div className="ComponentsDiv">
                        <div className="Title">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="Frame">
                            <div className="Video">
                                <LectureVideo src={this.props.src}/>
                            </div>
                            <div className="Navigation">
                                <a className="Previous" to={this.props.previousLecture}>anterior</a>
                                <a className="Next" to={this.props.nextLecture}>próxima</a>
                            </div>
                        </div>
                        <div className="description">
                            <p>{this.props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class LectureVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <iframe src={this.props.src}></iframe>
        );
    }
}

function loadMyCourses(courseCode) {
    
}

export default StudentCourses;