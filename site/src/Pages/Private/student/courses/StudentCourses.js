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
        this.state = {
            selectedMenuOption:'Lectures'
        }
    }

    changeState = (state) => {
        this.setState(state);
    }
    
    render(){
        return (
            <div className='Page' id='StudentCoursesPage'>
                <div id='PageContent'>
                    <div className="Content">
                        <LateralMenu courseName='Física para Militares' changeState={this.changeState.bind(this)}/>
                        <MainContent content={this.state.selectedMenuOption}/>
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

class MainContent extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        const pages = {
            'Lectures': <Lectures/>,
            'Information': <CourseInformation/>
        };
        const content= pages[this.content];
        return content;
    }
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
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'Information'} name='Informação'/>
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'loadPage'} name='Aulas'/>
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'loadPage'} name='Simulados'/>
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'loadPage'} name='Fórum'/>
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'loadPage'} name='Materiais'/>
                        <MenuOption changeState={this.props.changeState.bind(this)} page={'loadPage'} name='Assinatura'/>
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

    loadContent = () => {
        console.log('ação escolhida:\n', this.props.page);
        this.props.changeState({
            selectedMenuOption:this.props.page
        })
    }
    
    render(){
        return (
            <div className='MenuOption' onClick={this.loadContent}>
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