import React from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class StudentDashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='StudentDashboardPage'>
                <h1>StudentDashboard</h1>
                <div>
                    {userInfo()}
                </div>
                <div>
                    <button onClick={logout}>sair</button>
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