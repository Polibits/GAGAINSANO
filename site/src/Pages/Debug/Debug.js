import React, { useState } from "react";
import axios from "axios";

function UsersFrame(users) {
    var list = [];
    function userFrame(user){
        return (
            <div>
                <p key={user.UserId}>email:{user.email}; id: {user.UserId}; </p>
                <p></p>
            </div>
            
        );
    }
    /*
    return (
        <div>{users.map((user) => <p key={user.UserId}>{user.UserId}</p>) }</div>
    );
    */
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

class Debug extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='DebugPage'>
                <h1>DebugPage</h1>
                <AllUsersFrame/>
            </div>
        );
    }
}

export default Debug;