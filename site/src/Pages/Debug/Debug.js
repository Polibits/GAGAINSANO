import React, { useState } from "react";
import axios from "axios";

function request() {
    console.log('fazendo request');
    const email = 'henrique';
    const password = '123';
    axios({
        method: 'get',
        url: 'http://localhost:5050/user/test',
        params: {
            email:email,
            password:password
        }
    }).then(function(response) {
        console.log(response.data);
    }).catch(function(error){
        console.log(error);
    }).finally(function() {
    
    });
}

class Debug extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='DebugPage'>
                <h1>DebugPage</h1>
                <button onClick={request}>fazer request</button>
            </div>
        );
    }
}

export default Debug;