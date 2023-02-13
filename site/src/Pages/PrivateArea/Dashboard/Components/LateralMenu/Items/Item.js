import React from "react";

import './Item.css';

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="LateralMenuItem">
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Item;