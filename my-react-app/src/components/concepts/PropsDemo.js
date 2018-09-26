import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { constants } from 'http2';

export const Projects = [
    { title: 'Beast Creature', author: 'Adam Smith', codepenUrl: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '01/15/2018' },
    { title: 'Another Beast', author: 'Allison Summers', codepenUrl: 'https://codepen.io/alsummers/pen/vpjXOX', date: '01/15/2018' },
    { title: 'Beast Mode', author: 'Andres Martin', codepenUrl: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '01/15/2018' },
    { title: 'Beasty', author: 'Andrew Gunst', codepenUrl: 'https://codepen.io/agunst99/pen/RxMYOM', date: '01/15/2018' },
]
export default class PropsDemo extends Component {
        constructor(props) {
        super();
        console.log('PropsDemo class:', props);
        this.state = { projects: Projects };
        console.log('State check:', this.state.projects)
    }
    render() {
        const works = this.state.projects.map((project, i) => {
            console.log("Project", project);
            console.log("Index", i);
        
            return (
                <div key={i} >
                    <h1>List of Projects</h1>
                        <Title title={project.title}/>
                        <Author author={project.author}/>
                        <CodepenUrl codepoen={project.codepenUrl}/>
                        <Footer date={project.date}/>
                    <hr />
            </div>
            );
        })
    
        return (
            <div className="main">
                <div className="mainDiv">
                    {works}
                </div>
            </div>
        )
    }
}
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
PropsDemo.defaultProps = {
    title: 'Beast with Beard',
    author: 'Adam Smith',
    codepenUrl: 'https://codepen.io/Adamws33/pen/KZQxwJ',
    date: '01/15/2018'
}
class Title extends React.Component {
    constructor(props) {
        super()
        console.log("Title Props:", props.title)
    }
    render() {
        return (
            <h3>{this.props.title}</h3>
        );
    }
}
class Author extends React.Component {
    render() {
        return (
            <h3><p>{this.props.author}</p></h3>
        );
    }
}
class CodepenUrl extends React.Component {
    render() {
        return (
            <h3>{this.props.codepenUrl}</h3>
        );
    }
}
class Footer extends React.Component {
    render() {
        return (
            <h3>{this.props.date}</h3>
        );
    }
}
//Defaults
PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenUrl: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
PropsDemo.defaultProps = {
    title: 'Generic Creature project',
    author: 'EFA Student',
    codepenUrl: 'www.codepen.com',
    date: '01/01/2018'
}





