import React from "react";
import Cookies from "universal-cookie";
import profilePicture from '../../../../content/Logo.png';
import './AdmDashboard.css';

const cookies = new Cookies();

class AdmDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualPage:'Courses'
        }
    }

    loadMyProfile = () => {
        console.log('Loading Profile');
        this.setState({actualPage:'MyProfile'});
    }

    loadCourses = () => {
        console.log('Loading Courses');
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
    
    render(){
        return (
            <div className='Page'>
                <div id="AdmLateralMenu">
                    <Profile username='Victor Cruz' profilePicture={profilePicture} userType='adm'/>
                    <div className="MenuOptions">
                        <div id='MenuOptionsDiv'>
                            <MenuOption action={this.loadMyProfile} name='Meu Perfil'/>
                            <MenuOption action={this.loadCourses} name='Cursos'/>
                            <MenuOption action={this.loadUsers} name='Usuários'/>
                            <MenuOption action={this.loadPayments} name='Pagamentos'/>
                            <MenuOption action={this.loadHelp} name='Ajuda'/>
                            <MenuOption action={logout} name='Sair'/>
                        </div>
                    </div>
                </div>
                <div id="Content">
                    {MainContent(this.state.actualPage)}
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
            <div>
                <h1>Courses</h1>
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
                <div>
                    <p>{this.props.name}</p>
                </div>
                
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
                <div id='ProfileUsernameDiv'>{this.props.username}</div>
                <div id ='ProfilePictureDiv'>
                    <img id='ProfilePictureImg' src={this.props.profilePicture}></img>
                </div>
                <div id='ProfileUserType'>{this.props.userType}</div>
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