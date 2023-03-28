import React from "react";

class StudentProfileView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='AdmProfileView'>
                <h1 id="title-adm" > Perfil do Estudante </h1>
                <div id="div-perfil"> 
                    <p id="item-adm">Nome: Gui Doido</p>
                    <p id="item-adm">Descrição do Usuário</p>
                    <p id="item-adm">CPF: Gui Doido</p>
                    <p id="item-adm">Email: Gui Doido</p>
                    <div id="status-div">
                        <p id="item-adm">Status de Permissão</p>
                        <p id="item-status">ESTUDANTE</p>
                    </div>
                    
                    <button id="button-status">Atualizar Informações</button>
                    <button id="button-status">Adicionar Informações</button>
                </div>

            </div>
        );
    }
}

export default StudentProfileView;