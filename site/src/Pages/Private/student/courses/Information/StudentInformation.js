import React from "react";

import profilePicture from '../../../../../content/Logo.png';

import './StudentInformation.css';

class CourseInformation extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='StudentCourseInformation'>
                <Description 
                    name='Física para Militares'
                    src={profilePicture}
                    resume='O curso de Física para Militares é o melhor curso de física do universo'
                    courseCode='fisica_militares'
                    price={'R$ 49.99'}
                    paymentFrequency='mensal'
                    content={<Content/>}
                />
            </div>
        );
    }
}

class Description extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="Description">
                <div className="GeneralSection">
                    <h2 className="CourseTitle">{this.props.name}</h2>
                    <div className="CourseImgDiv">
                        <img src={this.props.src}/>
                    </div>
                    <div className="ResumeDiv">
                        <p className="Resume">{this.props.resume}</p>
                    </div>
                    
                </div>
                <div className="SpecificSection">
                    <div className="Content">
                        <p>{this.props.content}</p>
                    </div>
                    <div>
                        <h2>Assinatura</h2>
                        <p>código: {this.props.courseCode}</p>
                        <p>preço: {this.props.price}</p>
                        <p>frequência de pagamento: {this.props.paymentFrequency}</p>
                        <button>cancelar assinatura</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Ementa</h2>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
                <p>Aula 01 - Leis de newton</p>
            </div>
        );
    }
}

export default CourseInformation;