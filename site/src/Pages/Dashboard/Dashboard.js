import React from 'react';
import Welcome from './Components/Welcome/Welcome';
import FeedLateral from './Components/FeedLateral/FeedLateral';
import ScrollingBox from './Components/ScrollingBox/ScrollingBox';

import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props); 
    }   
    render(){
        return(
            <div className='corpoDashboard'>
                <FeedLateral />
                <ScrollingBox>
                    <Welcome />
                </ScrollingBox>
            </div>
        );
    }
}

export default Dashboard;