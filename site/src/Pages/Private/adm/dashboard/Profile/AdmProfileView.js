import React from "react";

import './AdmProfileView.css';

class AdmProfileView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='GenericPage'>
                <h1> Perfil do Administrador </h1>
                <div> 
                    
                    <button id="button-status">Atualizar Informações</button>
                </div>

            </div>
        );
    }
}

export default AdmProfileView;