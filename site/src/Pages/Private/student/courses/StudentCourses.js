import React from "react";

import StarsBackground from '../../../Common Components/StarsBackground/StarsBackground.js';
import profilePicture from '../../../../content/Logo.png';

import Lectures from "./Lectures/StudentLectures.js";
import CourseInformation from "./Information/StudentInformation.js";

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
                    <div className="Content">
                        <LateralMenu courseName='Física para Militares'/>
                        {MainContent('Information')}
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

function MainContent(name) {
    const pages = {
        'Lectures': <Lectures/>,
        'Information': <CourseInformation/>
    };

    return pages[name]
}

class LateralMenu extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="LateralMenu">
                <Profile username='Carlos Eduardo' profilePicture={profilePicture} userType='estudante'/>
                <div className="MenuOptions">
                    <div className="MenuOptions">
                        <MenuOption name='Informação'/>
                        <MenuOption name='Aulas'/>
                        <MenuOption name='Simulados'/>
                        <MenuOption name='Fórum'/>
                        <MenuOption name='Materiais'/>
                        <MenuOption name='Assinatura'/>
                    </div>
                </div>
            </div>
        );
    }
}

class MenuOption extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='MenuOption' onClick={this.props.action}>
                <p>{this.props.name}</p>
            </div>
        );
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id='ProfileDiv'>
                <div>
                    <div id='ProfileUsernameDiv'>
                        <p>{this.props.username}</p>
                    </div>
                    <div id ='ProfilePictureDiv'>
                        <img id='ProfilePictureImg' src={this.props.profilePicture}></img>
                    </div>
                    <div id='ProfileUserType'>
                        <p>{this.props.userType}</p>
                    </div>
                </div>
            </div>
        );
    }
}



export default StudentCourses;