import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='LoginPage'>
                <h1>LoginPage</h1>
                <div className="Forms">
                    <forms>
                        <label>
                            Email
                            <input type="text"></input>
                        </label>
                        <label>
                            Senha
                            <input type="text"></input>
                        </label>
                    </forms>
                </div>
            </div>
        );
    }
}

export default Login;