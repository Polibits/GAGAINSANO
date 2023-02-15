import React from 'react';

import LateralMenu from './Components/LateralMenu/LateralMenu';
import Content from './Components/Content/Content';

import './Dashboard.css';

class Dashboard extends React.Component{
    constructor(props){
        super(props); 
    }   
    render(){
        return(
            <div className='DashboardBody'>
                <LateralMenu username='Carlos'></LateralMenu>
                <Content></Content>
            </div>
        );
    }
}

export default Dashboard;