import React from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import './StudentDashboard.css';
import StarsBackground from "../../../Common Components/StarsBackground/StarsBackground";
import profilePicture from '../../../../content/Logo.png';

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='StudentDashboardPage'>
                <div id='PageContent'>
                    <div className="Content">
                        {MainContent('')}
                        <LateralMenu/>
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
            <div id="LateralMenu">
                <Profile username='Victor Cruz' profilePicture={profilePicture} userType='adm'/>
                <div className="MenuOptions">
                    <MenuOption name='Meu Perfil'/>
                    <MenuOption name='Meus Cursos'/>
                    <MenuOption name='Pagamentos'/>
                    <MenuOption name='Pagamentos'/>
                    <MenuOption name='Ajuda'/>
                    <MenuOption name='Sair'/>
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

function loadCourses() {
    axios({
        url:'http://localhost:5050/courses/read/all',
        method:'get'
    }).then((response) => {
        cookies.set('userCourses', response.data.coursesFrameworks, '/');
    }).catch((error) => {
        console.log(error);
    });
}

function MainContent(name) {
    /*
    const pages = {
        'MyProfile':<UserProfileView/>,
        'MyCourses':<MyCoursesView/>,
        'Payments':<Payments/>,
        'Notifications':<UserProfileView/>,
        'Help':<UserProfileView/>
    }
    return pages[name];
    */
   return <></>
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