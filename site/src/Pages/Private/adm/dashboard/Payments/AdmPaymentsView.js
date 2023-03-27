import React from "react";

import './AdmPaymentsView.css';

class AdmPaymentsView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='AdmPayments'>  
                <div id="user-pay">
                    <h1>Pagamentos dos Usuários</h1>
                    <div id="list">
                        <div id="card-item">
                            <p>Item</p>
                        </div>

                        <div id="card-item">
                            <p>Item</p>
                        </div>

                        <div id="card-item">
                            <p>Item</p>
                        </div>
                    </div>

                </div>
                <div id="course-pay">
                    <h1>Pagamentos dos Cursos</h1>
                    <div id="list">
                    <div id="card-item">
                            <p>Item</p>
                        </div>
                        <div id="card-item">
                            <p>Item</p>
                        </div>
                        <div id="card-item">
                            <p>Item</p>
                        </div>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default AdmPaymentsView;