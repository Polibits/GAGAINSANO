import React from "react";
import Cookies from "universal-cookie";
import profilePicture from '../../../../content/Logo.png';
import './AdmDashboard.css';

import AdmCourses from '../courses/AdmCourses.js';
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
                    <LateralMenu/>
                    {MainContent('')}
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

class AdmCoursesView extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div id='AdmCoursesView'>
                <h1>Courses</h1>
                <div id='coursesList'>
                    <CourseCard
                    imgURL="a"
                    id="1"
                    price="300" 
                    courseCode="34234"
                    description="descricaoFodaa"
                    paymentFrequency = "100"
                    comercialName='fisica 1'/>
                </div>
            </div>
        );
    }
}

class CourseCard extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div id='CourseCard'>
                <img src={this.props.imgURL}></img>
                <div>
                    <p id="course-item">Nome do Curso: {this.props.comercialName}</p>
                    <p id="course-item">Código do Curso: {this.props.courseCode}</p>
                </div>
                <div>
                    <p id="course-item">Descrição: {this.props.description}</p>
                    <p id="course-item">Preço: {this.props.price}</p>
                    <p id="course-item">Frequência de Pagamento: {this.props.paymentFrequency}</p>
                </div>
                <div>
                    <button id="course-button" action={this.props.id}> DELETAR</button>
                    <button id="course-button" action={this.props.id}> ATUALIZAR</button>
                    <button id="course-button" action={this.props.id}> Adicionar Aula</button>
                </div>
            </div>
        );
    }
}

class AdmUsersView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Users</h1>
            </div>
        );
    }
}

class AdmProfileView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My Profile</h1>
                <p>texto aleatório</p>
            </div>
        );
    }
}

class Payments extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Payments</h1>
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
        'Payments':<Payments/>,
        'Help':<AdmCoursesView/>
    }
    return pages[name];
} 

export default AdmDashboard;