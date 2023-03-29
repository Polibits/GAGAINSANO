import React from "react";
import Cookies from "universal-cookie";
import axios from 'axios';

import profilePicture from '../../../../../content/Logo.png';
import './AdmCoursesView.css';

const cookies = new Cookies();

class AdmCoursesView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loadedCourses:false,
            userCourses:null
        }
    }

    getCourses = () => {
        console.log('getCourses:')
        axios({
            method:'get',
            url:'http://localhost:5050/courses/read/all',
            params: {}
        }).then((response) => {
            this.setState({
                userCourses:response.data.coursesFrameworks,
                loadedCourses:true
            });
            console.log('state: ', this.state);
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        if(!this.state.loadedCourses)
            this.getCourses();

        return (
            <div id='AdmCoursesView'>
                <h1>Cursos</h1>
                <div id="edit-list">
                    <a id="edit-button">Criar Curso</a>
                </div>
                <div id='coursesList'>
                    {this.CourseCards()}
                </div>
            </div>
        );
    }

    CourseCards = () => {
        const courses = this.state.userCourses;
        var cards = [];

        console.log(courses);

        for(var course in courses){
            var card = (
                <CourseCard
                    key={courses[course].courseCode}
                    imgURL={profilePicture}
                    courseCode={courses[course].courseCode}
                    description={courses[course].description}
                    comercialName={courses[course].comercialName}
                    price={courses[course].price}
                    paymentFrequency={courses[course].paymentFrequency}
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
            <div id='CourseCard'>
                <div className="CourseImg">
                    <img src={this.props.imgURL}></img>
                </div>
                <div className='IdentificationInfo'>
                    <h2>{this.props.comercialName}</h2>
                    <p>{this.props.description}</p>
                </div>
                <div className="SpecificInfo">
                    <div>
                        <p>Código: {this.props.courseCode}</p>
                        <p>Preço: R$ {this.props.price}</p>
                        <p>Pagamento: {this.props.paymentFrequency}</p>
                    </div>
                </div>
                <div className="Actions">
                    <button id="action-course-btn" action={this.props.id}> Editar </button>
                    <button id="action-course-btn" action={this.props.id}> Deletar </button>
                </div>
            </div>
        );
    }
}

export default AdmCoursesView;