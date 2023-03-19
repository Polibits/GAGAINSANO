import React from "react";
import axios from "axios";

class AdmCourses extends React.Component {
    constructor(props) {
        super(props);
        this.state = { coursesFrameworks:[], loaded:false};
    }

    getCoursesFrameworks = () => {
        axios({
            method:'get',
            url:'http://localhost:5050/courses/framework/read/all'
        }).then((response) => {
            this.setState({coursesFrameworks: response.data.coursesFrameworks});
        });
    }
    
    render(){
        return (
            <div className='AdmCoursesPage'>
                <h1>AdmCoursesPage</h1>
                <div className="Forms">
                    <form>
                        {Field('Nome Comercial do Curso', 'comercialName', 'text')}
                        {Field('Código do curso', 'courseCode', 'text')}
                        {Field('Descrição breve', 'description', 'textarea')}
                        {Field('Preço', 'price', 'text')}
                        <div>
                            <label>Frequência de Pagamento</label>
                        </div>
                        <select id="paymentFrequency">
                            <option value="single">única</option>
                            <option value="monthly">mensal</option>
                            <option value="annually">anual</option>
                        </select>
                    </form>
                </div>
                <button onClick={createCourse}>criar curso</button>
                <button onClick={this.getCoursesFrameworks}>carregar cursos</button>
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
        url:'http://localhost:5050/courses/framework/create',
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
                        <p>comercialName: {course.comercialName}</p>
                        <p>courseCode: {course.courseCode}</p>
                        <p>description: {course.description}</p>
                        <p>price: {course.price}</p>
                        <p>paymentFrequency: {course.paymentFrequency}</p>
                    </div>
                );
            })}
        </div>
    );
}

function Field(name, id, type) {
    return (
        <div className="Field">
            <p>{name}</p>
            <label>
                <input id={id} type={type}></input>
            </label>
        </div>
    );
}

export default AdmCourses;