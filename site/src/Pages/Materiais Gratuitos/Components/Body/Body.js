import React from 'react';
import Stars from '../../../InitialPage/Components/StarsBackground/Stars';

import './Body.css';

class Body extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <Stars></Stars>
                <main class='corpo'>
                    <section>
                        <h1>dfdfdfd</h1>
                    </section>
                </main>
            </>
        );
        
    }
}

export default Body;