import React from "react";
import axios from "axios";

function UsersFrame(users) {
    
    var list = [];
    function userFrame(user){
        return (
            <div key={user.UserId}>
                <p>id: {user.id}</p>
                <p>fullName: {user.fullName}</p>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>cpf: {user.cpf}</p>
                <p>userType: {user.userType}</p>
            </div>
        );
    }
    return (
        <div>{users.map(userFrame)}</div>
    );
}

class AllUsersFrame extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users:[], loaded:false};
    }

    getUsers = () => {
        const request = axios({
            method: 'get',
            url: 'http://localhost:5050/user/read/all'
        }).then((response) => {
            this.setState({ users: response.data.users, loaded: true});
        });
        return request;
    }

    render(){
        return (
            <div>
                <button onClick={this.getUsers}>Carregar</button>
                <div>{UsersFrame(this.state.users)}</div>
            </div>
        );
    }
}

class AdmUsers extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='AdmUsersPage'>
                <h1>AdmUsersPage</h1>
                <AllUsersFrame/>
            </div>
        );
    }
}

export default AdmUsers;