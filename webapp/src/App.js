import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Splash from './pages/splash/index'
import Explore from './pages/explore/index'


class App extends Component {
  render() {
    return (
      <Router  >
        <Route exact path="/" component={Splash} />
        <Route exact path="/explore" component={Explore} />
      </Router>
    );
  }
}

export default hot(App);
