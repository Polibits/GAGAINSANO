import React from "react";

import StarsBackground from '../../../Common Components/StarsBackground/StarsBackground.js';

import example from '../../../../content/videos/example.mp4';

import '../../../GlobalStyle.css';
import './StudentCourses.css';

// https://www.youtube.com/watch?v=DBXH9jJRaDk
const url = 'https://www.youtube.com/watch?v=STXM8uXWCnQ';
const description = 'Nesta aula, aprendemos sobre as leis de newton';

class StudentCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='StudentCoursesPage'>
                <div id='PageContent'>
                    <div className="Content">
                        <LateralMenu courseName='Física para Militares'/>
                        <Lecture title='Aula 01 - Leis de Newton' src={example} description={description}/>
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

class LateralMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="LateralMenu">
                <div className="CourseProfile">
                    <p>{this.props.courseName}</p>
                </div>
                <div className="MenuOptions">
                    <div className="Index">
                    </div>
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
                            <div className="description">
                                <p>descrição</p>
                                <p>{this.props.description}</p>
                            </div>
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
            <div>
                <video src={this.props.src} id='lectureVideoIframe' controls controlsList="nodownload"/>
            </div>
            
        );
    }
}

export default StudentCourses;