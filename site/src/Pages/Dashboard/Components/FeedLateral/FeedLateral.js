import React from 'react';
import Subject from '../Subject/Subject';
import './FeedLateral.css';
import fisica from '../../Assets/fisica.svg'

class FeedLateral extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <main className='boxFeedLateral'>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                    <Subject materia="Matéria" size={30} icon={fisica}></Subject>
                </main>
            </>
        );
    }
}

export default FeedLateral; 