import React from "react";
import './StudentCoursesView.css';
import profilePicture from '../../../../../content/Logo.png';

class StudentCoursesView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Cursos</h1>
                <CourseCard
                    imgURL={profilePicture}
                    courseCode="militares_fisica"
                    description="este curso é foda de mais, seloko cachorro. Vai estourar no ita. Nóis é pika confia"
                    comercialName='Física para Militares'/>
                <CourseCard
                    imgURL={profilePicture}
                    courseCode="olimpiadas_química"
                    description="este curso é foda de mais, seloko cachorro. Vai estourar no ita. Nóis é pika confia"
                    comercialName='Química para OBQ'/>
            </div>
        );
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