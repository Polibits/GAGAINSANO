import React from "react";

import './AdmUsersView.css'

class AdmUsersView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='GenericPage'>
                <h1>Lista de Usuários da Plataforma</h1>
                    <div id="list-users">

                        <div id="card-user">
                            <img src="user_img"></img>
                                <div id="description-user">
                                    <p>Nome</p>
                                    <p>Descrição</p>
                                </div>
                            <button>Atualizar Status do Aluno</button>
                            <button>Ver Pagamentos</button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default AdmUsersView;