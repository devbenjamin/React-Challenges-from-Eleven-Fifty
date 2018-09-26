import React, { Component } from 'react';

export default class TimerApp extends Component {
  constructor(props) {
      super(props)
    
      this.state = {
          secondsElapsed: 0,
          interval: 0
      }
    }
    tick =() =>{
      this.setState((prevState) => ({  // takes in the thing 'this' references, takes in the paramater 'prevState', and ... 
        secondsElapsed: prevState.secondsElapsed + 1  // because thsi is ina an object, wer use the ':' to denote '=', this increments secondsElapsed by 1
      }))
    }
    componentDidMount() {
        this.secondsElapsed = setInterval(() => this.tick(), 1000); // the property of the object 'this' is referring to is set to equal whatever the function 'setInterval' which calls a function, in this case this.tick(), every 1000ms
    }                                                               // Conveniently, React will refresh everytime a state is changed, so changinging the state of secondsElapsed will automatically refresh the page
    componentWillUnmount() {
        clearInterval(this.interval);
        console.log(this.intreval);
    }
    render() {
        return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">React Timer</h1> 
                <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
            </div>  
        </div>
        );
    }
}

