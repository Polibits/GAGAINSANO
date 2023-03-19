import React, { useState } from "react";
import axios from "axios";

function sendVideo() {
    const video = document.getElementById('video').data;
    
    console.log('enviando vídeo');
    console.log(video);
}

class Debug extends React.Component {
    constructor(props) {
        super(props);
        this.state = {video:null}
    }
    
    getVideo = () => {
        this.setState({video: <video src='http://localhost:5050/courses/content/read'></video>});
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