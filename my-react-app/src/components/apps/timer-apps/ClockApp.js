import React, { Component } from 'react';

export default class ClockApp extends Component {
  constructor(props) {
    super(props);
    var date = this.getTimeString();
    this.state = {
      time: date  // this is a 'key: value' pair
    }
  }
  getTimeString() {
    const date = new Date(Date.now()).toLocaleTimeString();
    return date;
  }
  componentDidMount() {
    const _this = this;         // '_this' is defined at the local scope of 'componentDidMount'. When we want to use it later inside of 'setInterval(function ()', using 'this;' will refer to the local scope of that function, which is not useful in this case
    this.timer = setInterval(function () {
      var date = _this.getTimeString(); 
      _this.setState({
        time: date
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="main">
        <div className="mainDiv">
          <h1 className="section-title">React Clock</h1>
          <hr className="explanation" />
          <p>{this.state.time}</p>
        </div>
      </div>
    );
  }
}


