import React from "react";
import profilePicture from '../../../../../content/Logo.png';
import './AdmCoursesView.css';

class AdmCoursesView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='AdmCoursesView'>
                <h1>Cursos</h1>
                <div id='coursesList'>
                    <CourseCard
                    imgURL={profilePicture}
                    price="300" 
                    courseCode="militares_fisica"
                    description="este curso é foda de mais, seloko cachorro. Vai estourar no ita. Nóis é pika confia"
                    paymentFrequency = "mensal"
                    comercialName='Física para Militares'/>
                    <CourseCard
                    imgURL={profilePicture}
                    price="300" 
                    courseCode="olimpiadas_fisica"
                    description="este curso é foda de mais, seloko cachorro. Vai estourar no ita. Nóis é pika confia"
                    paymentFrequency = "mensal"
                    comercialName='Olimpíadas de Física'/>
                </div>
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
                    <button action={this.props.id}> adicionar aulas</button>
                    <button action={this.props.id}> editar </button>
                </div>
            </div>
        );
    }
}

export default AdmCoursesView;