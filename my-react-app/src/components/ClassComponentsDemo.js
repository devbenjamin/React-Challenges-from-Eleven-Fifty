import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ClassComponentDemo extends Component {
   constructor(props) {
        super();
        this.state = { 
            count: 0, 
            discount: 0 
        };
    }
    incrementCount = () => {
        console.log("+increment called");
        this.setState(
            { count: this.state.count + 1}
        )
    }
    decrementCount = () => {
        console.log("-decrement called")
        this.setState(
            { discount: this.state.discount - 1}
        )
    }
    render() {
        console.log("render called")
        return (
            <div className="main">
                <div className="mainDiv">
                <ClassComponentNotes />
                    <hr />
                    <h3>Smash that button!</h3>
                    <button onClick={this.incrementCount}>
                        <FontAwesomeIcon icon="thumbs-up" />
                         {' '}Likes: {this.state.count} 
                    </button>
                    <button onClick={this.decrementCount}>
                        <FontAwesomeIcon icon="thumbs-down" />
                        {' '}Dislike: {this.state.discount}
                    </button>
                </div>
            </div>
        )
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>
            <p>Class components are considered the "React Way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Built on these, must understand them</dd>
                <dt>must extrend Component</dt>
                <dd>Class clmnponents need to extend the React Component</dd>
                <dt>render()</dt>
                <dd>Class cmponents must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only one class component exported per file.</dd>
            </dl>
        </div>
    )
}
