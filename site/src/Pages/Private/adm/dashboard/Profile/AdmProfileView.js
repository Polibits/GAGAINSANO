import React from "react";

import './AdmProfileView.css';

class AdmProfileView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='AdmProfileView'>
                <h1 id="title-adm" > Perfil do Administrador </h1>
                <div> 
                    <p id="item-adm">Vitor Adm</p>
                    <p id="item-adm">Descrição</p>
                    <p id="item-adm">Status de Permissão</p>
                    <button id="button-status">Atualizar Informações</button>
                    <button id="button-status"></button>
                </div>

            </div>
        );
    }
}

export default AdmProfileView;