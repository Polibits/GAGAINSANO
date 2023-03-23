import React from "react";
import Cookies from "universal-cookie";
import './StudentDashboard.css';
import profilePicture from '../../../../content/Logo.png';

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page'>
                <div className="Content">
                    <div id="LateralMenu">
                        <Profile profilePicture={profilePicture} username='Henrique Eduardo' userType='estudante'/>
                        <div className="MenuOptions">
                            <div id='MenuOptionsDiv'>

                            
                                <MenuOption name='Meu Perfil'/>
                                <MenuOption name='Meus Cursos'/>
                                <MenuOption name='Pagamentos'/>
                                <MenuOption name='Recados'/>
                                <MenuOption name='Ajuda'/>
                                <MenuOption name='Sair'/>
                            </div>
                        </div>

                    </div>
                    <div className="MenuOptionRender">
                        <div className="Title">
                            <h1>StudentDashboard</h1>
                        </div>
                        
                        <div className="MainContent">
                            {userInfo()}
                            <div>
                                <button onClick={logout}>sair</button>
                            </div>
                        </div>
                        
                    </div>
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

class MenuOption extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='MenuOption'>
                <div>
                    <p>{this.props.name}</p>
                </div>
                
            </div>
        );
    }
}

function userInfo() {
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