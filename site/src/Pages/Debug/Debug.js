import React from "react";

import { UserController } from "../../Controllers/Users";

function userFrame(fullName, username, email, password, cpf) {
    return (
        <div>
            <p>{fullName} {username} {email} {password} {cpf}</p>
        </div>
    );
}

function usersList() {
    const list = [
        userFrame(
            'Henrique Eduardo',
            'henriqueedu2001',
            'henrique@email.com',
            '123',
            '123.123.123-45'
        )
    ];
    return (
        <div>
            {list}
        </div>
    );
}

class AllUsersFrame extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div>{usersList()}</div>
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