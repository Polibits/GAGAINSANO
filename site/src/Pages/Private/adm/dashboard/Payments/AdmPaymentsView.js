import React from "react";

import './AdmPaymentsView.css';

class AdmPaymentsView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='AdmPayments'>  
                <div id="user.course-pay">
                    <h2 id="title">Pagamentos dos Usuários</h2>
                    <div id="list">
                        <div id="card-item">
                            <p id="item-card">Nome do Usuário:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>

                        <div id="card-item">
                            <p id="item-card">Nome do Usuário:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>

                        <div id="card-item">
                            <p id="item-card">Nome do Usuário:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>
                    </div>

                </div>
                <div id="user.course-pay">
                    <h2 id="title">Pagamentos dos Cursos</h2>
                    <div id="list">
                    <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>
                        <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>
                        <div id="card-item">
                            <p id="item-card">Nome do Curso:</p>
                            <p id="item-card"> Gustavo </p>
                            <p id="Item-status"> STATUS </p>
                            <a id="item-details"> Detalhes </a>
                        </div>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default AdmPaymentsView;