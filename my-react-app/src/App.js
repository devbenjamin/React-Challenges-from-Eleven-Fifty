import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Header from './components/site/Header'
import Footer from './components/site/Footer'
import Sidebar from './components/site/Sidebar'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Sidebar />
        </Router>
        <Footer />
      </div>
    );
  }
}
library.add(faThumbsUp)
library.add(faThumbsDown)

export default App;



