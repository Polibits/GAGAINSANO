import React from "react";
import Cookies from "universal-cookie";
import axios from 'axios';
import './StudentDashboard.css';
import profilePicture from '../../../../content/Logo.png';

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage:'MyCourses'
        }
    }

    loadMyProfile = () => {
        console.log('Loading Profile');
        this.setState({actualPage:'MyProfile'});
    }

    loadMyCourses = () => {
        console.log('Loading Courses');
        loadCourses();
        this.setState({actualPage:'MyCourses'});
    }

    loadPayments = () => {
        console.log('Loading Payments');
        this.setState({actualPage:'Payments'});
    }

    loadNotifications = () => {
        console.log('Loading Notifications');
        this.setState({actualPage:'Notifications'});
    }

    loadHelp() {
        console.log('Loading Help');
        this.setState({actualPage:'Help'});
    }
    
    render(){
        return (
            <div className='Page' id='StudentDashboardPage'>
                <div className="Content">
                    <div id="LateralMenu">
                        <Profile profilePicture={profilePicture} username='Henrique Eduardo' userType='estudante'/>
                        <div className="MenuOptions">
                            <div id='MenuOptionsDiv'>
                                <MenuOption action={this.loadMyProfile} name='Meu Perfil'/>
                                <MenuOption action={this.loadMyCourses} name='Meus Cursos'/>
                                <MenuOption action={this.loadPayments} name='Pagamentos'/>
                                <MenuOption action={this.loadNotifications} name='Recados'/>
                                <MenuOption action={this.loadHelp} name='Ajuda'/>
                                <MenuOption action={logout} name='Sair'/>
                            </div>
                        </div>

                    </div>
                    <div className="MenuOptionRender">
                        <div className="MainContent">
                            {MainContent(this.state.actualPage)}
                        </div>
                        
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
    const pages = {
        'MyProfile':<UserProfileView/>,
        'MyCourses':<MyCoursesView/>,
        'Payments':<Payments/>,
        'Notifications':<UserProfileView/>,
        'Help':<UserProfileView/>
    }
    return pages[name];
} 

class UserProfileView extends React.Component {
    constructor(props) {
        super(props);
    }

    userInfo = () => {
        var info = cookies.get('userInfo');
        console.log(info);
        return (
            <div>
                <p>fullName: {info.fullName}</p>
                <p>username: {info.username}</p>
                <p>email: {info.email}</p>
                <p>cpf: {info.cpf}</p>
                <p>userType: {info.userType}</p>
                <p>UserId: {info.UserId}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
                <p>UserProfileView</p>
                {this.userInfo()}
            </div>
        );
    }
}

class MyCoursesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courses: []}
    }

    CourseDiv = (course) => {
        console.log('criando div para curso\n', course);
        return (
            <div id='StudentDashboardCourseDiv' key={course.id}>
                <div className="CourseImg">
                    <img src={profilePicture}></img>
                </div>
                <div className="CourseDetails">
                    <h2>{course.comercialName}</h2>
                    <p>{course.description}</p>
                </div>
                <div className="CourseAcess">
                    <a>acessar</a>
                </div>
            </div>
        );
    }

    Courses = () => {
        const serverCourses = cookies.get('userCourses');
        var coursesList = [];

        for(var course in serverCourses) {
            console.log(serverCourses[course]);
            coursesList.push(this.CourseDiv(serverCourses[course]));
        }

        return coursesList;
    }

    render() {
        return (
            <div>
                <div id='StudentDashboardCoursesDiv'>
                    <h2>Meus Cursos</h2>
                    {this.Courses()}
                </div>
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
                    <div id='ProfileUsernameDiv'>{this.props.username}</div>
                    <div id ='ProfilePictureDiv'>
                        <img id='ProfilePictureImg' src={this.props.profilePicture}></img>
                    </div>
                    <div id='ProfileUserType'>{this.props.userType}</div>
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
                <div>
                    <p>{this.props.name}</p>
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

export default StudentDashboard;