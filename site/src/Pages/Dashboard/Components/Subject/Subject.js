import React from 'react';
import './Subject.css';

class Subject extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return(
            <>
                <main className='materiaBox'>
                    <img height={this.props.size} width={this.props.size} src={this.props.icon}></img>
                    <div className='materiaName'>
                        <p>{this.props.materia}</p>
                    </div>
                </main>
            </>
        );
    }
}

export default Subject; 