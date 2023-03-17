import React from "react";

import { UserController } from "../../Controllers/Users";

var allUsers = [
    {
        'id':'1',
        'fullName':'full name',
        'username':'username',
        'email':'email@email.com',
        'userType':'userType'
    },
    {
        'id':'2',
        'fullName':'full name 2',
        'username':'username 2',
        'email':'email2@email.com',
        'userType':'userType2'
    }
]

function userFrame(ID, fullname, username, email, userType) {
    return (
        <div key={ID}>
            <p>{ID} {fullname} {username} {email} {userType}</p>
        </div>
    );
}

function usersFrameList() {
    const list = allUsers.map((user) => {
        return userFrame(
            user.id, 
            user.fullName, 
            user.username, 
            user.email, 
            user.userType
        );
    });

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
            <div>{usersFrameList()}</div>
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