import React from "react";
import axios from "axios";
import './AdmCourses.css'

class AdmCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coursesFrameworks:[], loaded:false};
    }

    getCoursesFrameworks = () => {
        axios({
            url:'http://localhost:5050/courses/read/all',
            method:'get'
        }).then((response) => {
            this.setState({coursesFrameworks: response.data.coursesFrameworks});
        }).catch((error) => {
            console.log(error);
        });
    }
    
    render(){
        return (
            <div className='Page'>
                <h1 id="title-page">Adicionar Novo Curso</h1>
                <div className="Forms">
                    <form id="form">
                        {Field('Nome Comercial do Curso', 'comercialName', 'text')}
                        {Field('Código do curso', 'courseCode', 'text')}
                        {Field('Descrição breve', 'description', 'textarea')}
                        {Field('Preço', 'price', 'text')}
                        <div>
                            <p id="label-title" >Frequência de Pagamento</p>
                        </div>
                        <select id="paymentFrequency">
                            <option id="option" value="single">única</option>
                            <option id="option" value="monthly">mensal</option>
                            <option id="option" value="annually">anual</option>
                        </select>
                        <div id="div-button">
                            <a id="button-form" onClick={createCourse}>criar curso</a>
                            <a id="button-form" onClick={this.getCoursesFrameworks}>carregar cursos</a>
                        </div>
                    </form>
                </div>
                
                <div>
                    {CoursesFrame(this.state.coursesFrameworks)}
                </div>
            </div>
        );
    }
}

function createCourse() {
    const courseCode = document.getElementById("courseCode").value;
    const comercialName = document.getElementById("comercialName").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;
    const paymentFrequency = document.getElementById("paymentFrequency").value;

    const courseFramework = {
        'comercialName':comercialName,
        'courseCode':courseCode,
        'description':description,
        'price':price,
        'paymentFrequency':paymentFrequency
    };
    axios({
        method:'post',
        url:'http://localhost:5050/courses/create',
        data:courseFramework
    }).then((response) => {
        console.log(response.data);
    });
}

function CoursesFrame(courses) {
    return (
        <div>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <p id="form-item">comercialName: {course.comercialName}</p>
                        <p id="form-item">courseCode: {course.courseCode}</p>
                        <p id="form-item">description: {course.description}</p>
                        <p id="form-item">price: {course.price}</p>
                        <p id="form-item">paymentFrequency: {course.paymentFrequency}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Field(name, id, type) {
    return (
        <div className="Field">
            <p id="form-p">{name}</p>
            <label>
                <input id="form-input2" type={type}></input>
            </label>
        </div>
    );
}

export default AdmCourses;