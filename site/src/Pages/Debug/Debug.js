import React, { useState } from "react";
import axios from "axios";

function sendVideo() {
    const video = document.getElementById('video').data;

    try {
        axios.post(
            'http://localhost:5050/courses/content/create',
            {}
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    } catch (error) {
        console.log(error);
    }
}

class Debug extends React.Component {
    constructor(props) {
        super(props);
        this.state = {video:null}
    }
    
    getVideo = () => {
        const filePrivatePath = 'videos/aula_01.mp4';
        const authenticationToken = 'sou_eu_caraio';
        const url = 'http://localhost:5050/files/get?filePrivatePath=' + filePrivatePath + '&authenticationToken='+ authenticationToken;
        axios({
            method:'get',
            url:'http://localhost:5050/files/get',
            params: {
                filePrivatePath:filePrivatePath,
                authenticationToken:authenticationToken
            }
        }).then((response) => {
            this.setState({video: <video src={url}></video> });
        }).catch((error) => {
            console.log(error);
        });
    }

    render(){
        return (
            <div className='DebugPage'>
                <h1>DebugPage</h1>
                <form>
                    <label>
                        envie um vídeo
                        <input id ='video' type='file'></input>
                    </label>
                </form>
                <button onClick={sendVideo}>enviar vídeo</button>
                <button onClick={this.getVideo}>receber vídeo</button>
                <div>
                    {this.state.video}
                </div>
            </div>
        );
    }
}

export default Debug;