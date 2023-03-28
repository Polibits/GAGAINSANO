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
                <div id="div-perfil"> 
                    <p id="item-adm">Nome: Vitor Adm</p>
                    <p id="item-adm">Descrição do Usuário</p>
                    <p id="item-adm">CPF: Vitor Adm</p>
                    <p id="item-adm">Email: Vitor Adm</p>
                    <div id="status-div">
                        <p id="item-adm">Status de Permissão</p>
                        <p id="item-status">Administrador</p>
                    </div>
                    
                    <button id="button-status">Atualizar Informações</button>
                    <button id="button-status">Adicionar Informações</button>
                </div>

            </div>
        );
    }
}

export default AdmProfileView;