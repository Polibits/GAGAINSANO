import React from "react";

class StudentPaymentsView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="user.course-pay">
                    <h2 id="title">Meus Pagamentos</h2>
                    <div id="list">
                        <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Física ||| </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                            <p id="item-card"> Data de Compra: </p>
                            <p id="item-card"> 24/04/2023 </p>
                        </div>

                        <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Física || </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                            <p id="item-card"> Data de Compra: </p>
                            <p id="item-card"> 24/04/2023 </p>
                        </div>

                        <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Química </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                            <p id="item-card"> Data de Compra: </p>
                            <p id="item-card"> 24/04/2023 </p>
                        </div>
                    </div>

                </div>
        );
    }
}

export default StudentPaymentsView;