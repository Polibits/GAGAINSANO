import React from "react";

class HelpPage extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='Page' id='HelpPage'>
                <div id='PageContent'>
                    <div className="Content">
                        <h1>Ajuda</h1>
                    </div>
                </div>
                <div id='PageBackground'>
                </div>
            </div>
        );
    }
}

export default HelpPage;