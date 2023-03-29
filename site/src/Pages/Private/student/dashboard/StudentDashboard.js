import React from "react";
import Cookies from "universal-cookie";
import axios from 'axios';

import './StudentDashboard.css';
import StarsBackground from "../../../Common Components/StarsBackground/StarsBackground";
import profilePicture from '../../../../content/Logo.png';

import StudentProfileView from "./Profile/MyProfileView";
import StudentCoursesView from "./Courses/StudentCoursesView";
import StudentPaymentsView from "./Payments/StudentPaymentsView";
import StudentNotificationsView from "./Notifications/StudentNotificationsView";

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage:'MyCourses'
        }
    }
    
    render(){
        return (
            <div className='Page' id='StudentDashboardPage'>
                <div id='PageContent'>
                    <div className="Content">
                        <div id="LateralMenu">
                            <Profile username='Victor Cruz' profilePicture={profilePicture} userType='adm' />
                            <div className="MenuOptions">
                                <MenuOption action={this.loadMyProfile} name='Meu Perfil' />
                                <MenuOption action={this.loadCourses} name='Meus Cursos' />
                                <MenuOption action={this.loadPayments} name='Pagamentos' />
                                <MenuOption action={this.loadNotifications} name='Notificações' />
                                <MenuOption action={this.loadHelp} name='Ajuda' />
                                <MenuOption action={this.loadMyProfile} name='Sair' />
                            </div>
                        </div>
                        {MainContent(this.state.actualPage)}
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }

    loadMyProfile = () => {this.setState({actualPage:'MyProfile'});}
    loadCourses = () => {this.setState({actualPage:'MyCourses'});}
    loadPayments = () => {this.setState({actualPage:'Payments'});}
    loadNotifications = () => {this.setState({actualPage:'Notifications'});}
    loadHelp = () => {this.setState({actualPage:'Help'});}
}

function MainContent(name) {
    const pages = {
        'MyProfile':<StudentProfileView/>,
        'MyCourses':<StudentCoursesView/>,
        'Payments':<StudentPaymentsView/>,
        'Notifications':<StudentNotificationsView/>,
        'Help':<StudentCoursesView/>
    }
    return (
        <div className="MainContentDiv">
            {pages[name]}
        </div>
    );
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

function loadCourses() {
    console.log();
    axios({
        url:'http://localhost:5050/courses/read/all',
        method:'get'
    }).then((response) => {
        cookies.set('userCourses', response.data.coursesFrameworks, '/');
    }).catch((error) => {
        console.log(error);
    });
}

function logout() {
    console.log('COOKIE DESTRUÍDO');
    console.log(cookies.get('loadedUser'));
    console.log(cookies.get('userInfo'));

    cookies.set('loadedUser', false, {path:'/'})
    cookies.set('userInfo', {}, {path:'/'});

    console.log(cookies.get('loadedUser'));
    console.log(cookies.get('userInfo'));
    redirect();
}

function redirect() {
    window.location.href = '/';
}

export default StudentDashboard;