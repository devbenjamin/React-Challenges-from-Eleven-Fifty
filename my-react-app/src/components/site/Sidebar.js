import React from 'react';

import {
    Route,
    Link,
    Switch 
} from 'react-router-dom'

import Home from './Home'
import Resources from './Resources'
import JSXRules from '../concepts/JSXRules'
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo'
import ClassComponentsDemo from '../ClassComponentsDemo'
import PropsDemo from '../concepts/PropsDemo'
import TimePiecesApp from '../apps/timer-apps/TimePiecesApp';
import MovieSearchApp from '../apps/movie-search-app/MovieApp';
import NytApp from '../apps/nyt-app/NytApp'

const Sidebar = () => (

    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rationale">Rationale</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="/classcomponentsdemo">Class Components</Link></li>
                <li><Link to="/PropsDemo">Props Demo</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/timer">Timers</Link></li>
                <li><Link to="/movie">Movie Search</Link></li>
                <li><Link to="/nytapp">New York Times Search</Link></li>
            </ul>
        </div>
        <div className="sidebar">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/classcomponentsdemo"><ClassComponentsDemo /></Route>
                <Route exact path="/propsdemo"><PropsDemo /></Route>
                <Route exact path="/timer"><TimePiecesApp /></Route>
                <Route exact path="/movie"><MovieSearchApp /></Route>
                <Route exact path="/nytapp"><NytApp /></Route>
            </Switch>
        </div>
    </div>
)

export default Sidebar;
 