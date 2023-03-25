import React from "react";
import StarsBackground from '../../Common Components/StarsBackground/StarsBackground';
import NavigationBar from "../../Common Components/NavigationBar/NavigationBar";
import './../../GlobalStyle.css';
import './CoursePreview.css';

class CoursesPreview extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render(){
        return (
            <div className='Page' id='CoursesPreviewPage'>
                <div id='PageContent'>
                    <NavigationBar/>
                    <h1>cursos</h1>
                </div>
                <div id='PageBackground'>
                    <StarsBackground/>
                </div>
            </div>
        );
    }
}

export default CoursesPreview;