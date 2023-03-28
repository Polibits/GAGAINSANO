import React from "react";

import example from '../../../../../content/videos/example.mp4';
const description = 'Nesta aula, aprendemos sobre as leis de newton';

class Lectures extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Lecture title='Aula 01 - Leis de Newton' src={example} description={description}/>
        );
    }
}

class Lecture extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Lecture">
                <div className="LectureBox">
                    <div className="ComponentsDiv">
                        <div className="Title">
                            <h2>{this.props.title}</h2>
                        </div>
                        <div className="Frame">
                            <div className="Video">
                                <LectureVideo src={this.props.src}/>
                            </div>
                            <div className="Navigation">
                                <a className="Previous" to={this.props.previousLecture}>anterior</a>
                                <a className="Next" to={this.props.nextLecture}>próxima</a>
                            </div>
                            <div className="description">
                                <p>descrição</p>
                                <p>{this.props.description}</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

class LectureVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    noRightClick = (event) => {
        console.log(event);
        event.preventDefault();
        return false;
    }
    
    render() {
        return (
            <div onContextMenu={this.noRightClick}>
                <video src={this.props.src} id='lectureVideoIframe' controls controlsList="nodownload"/>
            </div>
            
        );
    }
}

export default Lectures;