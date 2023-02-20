import React from "react";

import CourseImg from './../../../../../CoursesImages/smudge.png';

import './LateralMenu.css';


class LateralMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LateralMenuDiv">
                <CourseInfo name='gaga insano' description='bla bla bla' img={CourseImg}></CourseInfo>
                <MenuItems></MenuItems>
            </div>
        );
    }
}

class CourseInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="CourseInfoDiv">
                <h1>{this.props.name}</h1>
                <div className="CourseImageDiv">
                    <img src={this.props.img}></img>
                </div>
                <p>{this.props.description}</p>
            </div>
        );
    }
}

class MenuItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="MenuItemsDiv">
                <Chapter name='Capítulo 1'></Chapter>
                <Chapter name='Capítulo 2'></Chapter>
                <Chapter name='Capítulo 3'></Chapter>
            </div>
        );
    }
}

class Chapter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ChapterDiv">
                <p>{this.props.name}</p>
                <Topic name='tópico 1'></Topic>
                <Topic name='tópico 2'></Topic>
                <Topic name='tópico 3'></Topic>
                <Topic name='tópico 4'></Topic>
            </div>
        );
    }
}

class Topic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="TopicItemDiv">
                <p>{this.props.name}</p>
            </div>
        );
    }
}

export default LateralMenu;