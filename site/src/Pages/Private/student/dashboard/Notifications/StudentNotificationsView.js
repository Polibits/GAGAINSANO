import React from "react";
import './StudentNotificationsView.css';
class StudentNotificationsView extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="page-notification">
                <h1>Mural de Notificações</h1>
                <div id="List-notifications">
                    <div id="not-list">
                        <h2>Novidades dos Cursos</h2>
                        <div id="card-notif">
                            <p>Título da Novidade</p>
                            <p>Data do Evento</p>
                            <p>Descrição</p>
                        </div>

                        <div id="card-notif">
                            <p>Título da Novidade</p>
                            <p>Data do Evento</p>
                            <p>Descrição</p>
                        </div>

                    </div>
                    <div id="not-list">
                        <h2>Novidades da Plataforma</h2>
                        <div id="card-notif">
                            <p>Título da Novidade</p>
                            <p>Data do Evento</p>
                            <p>Descrição</p>
                        </div>

                        <div id="card-notif">
                            <p>Título da Novidade</p>
                            <p>Data do Evento</p>
                            <p>Descrição</p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default StudentNotificationsView;