import React, { useState } from "react";
import axios from "axios";

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

    sendVideo = async (event) => {
        const fileName = document.getElementById('lectureName').value;
        const file = document.getElementById('video').files[0];
    
        const filePrivatePath = 'videos/' + fileName + '.mp4';
        const authenticationToken = 'sou_eu_caraio';

        const data = {
            filePrivatePath:filePrivatePath,
            authenticationToken:authenticationToken
        }

        let formData = new FormData();
        formData.append("file", file);

        try {
            /*
            fetch('http://localhost:5050/files/upload', {
                method:'POST',
                body:formData
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });*/
            
            axios.post('http://localhost:5050/files/upload', formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error);
            });
            
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            <div className='DebugPage'>
                <h1>DebugPage</h1>
                <form>
                    <label>
                        nome da aula
                        <input id='lectureName' type='text'></input>
                    </label>
                    <label>
                        envie um vídeo
                        <input id ='video' type='file' name='exemplo'></input>
                    </label>
                </form>
                <button onClick={this.sendVideo}>enviar vídeo</button>
                <button onClick={this.getVideo}>receber vídeo</button>
                <div>
                    {this.state.video}
                </div>
            </div>
        );
    }
}

export default Debug;