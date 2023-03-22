import React from "react";
import Cookies from "universal-cookie";
import './StudentDashboard.css';

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page'>
                <div className="Content">
                    <div className="LateralMenu">
                        <Profile/>
                        <div className="MenuOptions">
                            <MenuOption name='Meu Perfil'/>
                            <MenuOption name='Meus Cursos'/>
                            <MenuOption name='Pagamentos'/>
                            <MenuOption name='Recados'/>
                            <MenuOption name='Ajuda'/>
                            <MenuOption name='Sair'/>
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
            <div className='Profile'>
                <p>{this.props.username}</p>
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