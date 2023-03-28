import React from "react";

class CourseInformation extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Description name='Física para Militares'/>
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
                <h1 className="CourseTitle">Informação do Curso</h1>
                <div>
                    <h2>{this.props.name}</h2>
                    <div>
                        <img src={this.src}/>
                    </div>
                    <p>{this.description}</p>
                    <p>{this.content}</p>
                </div>
                <h1>Assinatura</h1>
                <div>
                    <p>código: {}</p>
                    <p>preço: {}</p>
                    <p>frequência de pagamento:{}</p>
                    <button>cancelar assinatura</button>
                </div>
            </div>
        );
    }
}

export default CourseInformation;