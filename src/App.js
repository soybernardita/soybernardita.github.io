import React, {Component} from 'react';
import {Route,NavLink,HashRouter}from 'react-router-dom';
import CV from "./components/CV";
import './App.css';
import SwipeableRoutes from "react-swipeable-routes";

import ReactGA from 'react-ga';
ReactGA.initialize('UA-132402884-1');
ReactGA.pageview('homepage');

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div>
        <ul className="header">
          <li><NavLink ></NavLink></li>
          <li id="download"><a href='./unmateo-resume.pdf' download='unmateo-resume.pdf' onClick={ReactGA.pageview('download-resume')}>Download</a></li>
        </ul>
        <div className="content">
        <SwipeableRoutes>
          <Route exact path="/" component={CV}/>
        </SwipeableRoutes>
        </div>
      </div>
    </HashRouter>
    );
  }
}
export default App;
