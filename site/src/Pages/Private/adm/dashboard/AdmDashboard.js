import React from "react";
import Cookies from "universal-cookie";
import profilePicture from '../../../../content/Logo.png';
import './AdmDashboard.css';

import AdmProfileView from "./Profile/AdmProfileView";
import AdmCoursesView from "./Courses/AdmCoursesView";
import AdmUsersView from "./Users/AdmUsersView";
import AdmPaymentsView from "./Payments/AdmPaymentsView";

import StarsBackground from "../../../Common Components/StarsBackground/StarsBackground";

const cookies = new Cookies();

class AdmDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage:'Courses'
        }
    }
    
    render(){
        return (
            <div className='Page' id='AdmDashboardPage'>
                <div id='PageContent'>
                    <div className="Content">
                        <LateralMenu />
                        <AdmCoursesView />
                    </div>
                </div>
                <div id='PageBackground'>
                    <StarsBackground />
                </div>
            </div>
        );
    }
}

class LateralMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage:'Courses'
        }
    }

    loadMyProfile = () => {
        console.log('Loading Profile');
        cookies.set({actualPage: 'MyProfile'});
        this.setState({actualPage:'MyProfile'});
    }

    loadCourses = () => {
        console.log('Loading Courses');
        cookies.set({actualPage: 'Courses'});
        this.setState({actualPage:'Courses'});
    }

    loadUsers = () => {
        console.log('Loading Users');
        this.setState({actualPage:'Users'});
    }

    loadPayments = () => {
        console.log('Loading Payments');
        this.setState({actualPage:'Payments'});
    }

    loadHelp = () => {
        console.log('Loading Help');
        this.setState({actualPage:'Help'});
    }
    
    render() {
        return (
            <div id="AdmLateralMenu">
                <Profile username='Victor Cruz' profilePicture={profilePicture} userType='adm'/>
                <div className="MenuOptions">
                    <MenuOption action={this.loadMyProfile} name='Meu Perfil'/>
                    <MenuOption action={this.loadCourses} name='Cursos'/>
                    <MenuOption action={this.loadUsers} name='Usuários'/>
                    <MenuOption action={this.loadPayments} name='Pagamentos'/>
                    <MenuOption action={this.loadHelp} name='Ajuda'/>
                    <MenuOption action={logout} name='Sair'/>
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

function MainContent(name) {
    const pages = {
        'MyProfile':<AdmProfileView/>,
        'Courses':<AdmCoursesView/>,
        'Users':<AdmUsersView/>,
        'Payments':<AdmPaymentsView/>,
        'Help':<AdmCoursesView/>
    }
    return pages[name];
} 

export default AdmDashboard;