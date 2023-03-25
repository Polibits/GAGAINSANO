import React from "react";

import courseImg from '../../../content/Logo.png';
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import NavigationBar from "../../Common Components/NavigationBar/NavigationBar";
import './../../GlobalStyle.css';
import './CoursePreview.css';

class CoursesPreview extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='CoursesPreviewPage'>
                <div id='PageContent'>
                    <NavigationBar/>
                    <h1>CURSOS</h1>
                    <div className="body">
                        <MilitaryCourses/>
                        <VestCourses/>
                        <OlimpicCourses/>
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

class MilitaryCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="MilitaryCourses">
                <h2 className="SectionTitle">Vestibulares Militares</h2>
            </div>
        );
    }
}

class VestCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="VestCourses">
                <h2 className="SectionTitle">Vestibulares Tradicionais</h2>
            </div>
        );
    } 
}

class OlimpicCourses extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="OlimpicCourses">
                <h2 className="SectionTitle">Olimpíadas</h2>
            </div>
        );
    }
}

class CoursePresentation extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className="CoursePresentation">
                <div className="Img">
                    <img src={this.props.img}/>
                </div>
                <h3>{this.props.courseTitle}</h3>
                
            </div>
        );
    }
}

export default CoursesPreview;