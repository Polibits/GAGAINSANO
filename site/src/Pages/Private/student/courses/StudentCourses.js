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
                    <Lecture title='Aula 01 - Leis de Newton' src={example} description={description}/>
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
                <div className="CourseProfile"></div>
                <div className="MenuOptions">
                    <div className="Index"></div>
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

function videoURL(youtubeURL) {
    var finalURL = '';
    var id = '';
    var URLendStart = 32;

    for(var i = URLendStart; i < youtubeURL.length; i++){
        id += youtubeURL[i];
    }

    /*
    finalURL += 'https://www.youtube-nocookie.com/embed/';
    finalURL += id;
    finalURL += '?modestbranding=1'
    finalURL += '&showinfo=0';
    finalURL += '&controls=1';
    finalURL += '&showinfo=0';
    */
    finalURL += 'https://www.youtube-nocookie.com/embed/';
    finalURL += id;
    finalURL += '?controls=0&mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent';
    // ?mode=opaque
    //&amp;
    //rel=0
    //&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent
    //?mode=opaque&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;wmode=transparent

    return finalURL;
}

function removeSharingOptions() {
    console.log('removendo');
    try {
        //const element = document.querySelector("#document");
        //element.remove();
        //var iframe_document = document.getElementById('lectureVideoIframe').contentWindow.document;
    } catch (error) {
        //console.log(error);
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

function loadMyCourses(courseCode) {
    
}

export default StudentCourses;