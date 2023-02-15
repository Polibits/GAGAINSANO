import React from "react";

import ProfileInfo from './Profile/ProfileInfo.js';

import './LateralMenu.css'
import Item from "./Items/Item.js";

class LateralMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LateralMenu">
                <ProfileInfo username={this.props.username}></ProfileInfo>
                <Item name='Meu Perfil'></Item>
                <Item name='Meus Cursos'></Item>
                <Item name='Comprar Cursos'></Item>
                <Item name='Simulados'></Item>
                <Item name='Chat'></Item>
                <Item name='Recados'></Item>
            </div>
        );
    }
}

export default LateralMenu; 