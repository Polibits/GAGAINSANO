import React from "react";
import './StudentCoursesView.css';
import profilePicture from '../../../../../content/Logo.png';
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class StudentCoursesView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loadedCourses:false,
            userCourses:null
        }
    }

    getCourses = () => {
        axios({
            method:'get',
            url:'http://localhost:5050/courses/read/all',
            params: {}
        }).then((response) => {
            this.setState({
                userCourses:response.data.coursesFrameworks,
                loadedCourses:true
            });
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        if(!this.state.loadedCourses)
            this.getCourses();

        return (
            <div>
                <h1>Cursos</h1>
                {this.CourseCards()}
            </div>
        );
    }

    CourseCards = () => {
        const courses = this.state.userCourses;
        var cards = [];

        for(var course in courses){
            var card = (
                <CourseCard
                    key={courses[course].courseCode}
                    imgURL={profilePicture}
                    courseCode={courses[course].courseCode}
                    description={courses[course].description}
                    comercialName={courses[course].comercialName}
                />
            );
    
            cards.push(card);
        }

        return cards;
    }
}

class CourseCard extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            <div className="CourseCard">
                <div className="CourseImg">
                    <img src={this.props.imgURL}></img>
                </div>
                <div className='IdentificationInfo'>
                    <h2>{this.props.comercialName}</h2>
                    <p>{this.props.description}</p>
                    <p className="CourseCode">Código: {this.props.courseCode}</p>
                </div>
                <div className="Actions">
                    <button action={this.props.id}> Ver Curso </button>
                </div>
            </div>
        );
    }
}

export default StudentCoursesView;