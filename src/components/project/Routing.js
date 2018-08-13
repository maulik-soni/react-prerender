import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Index from './components/Index';
import Home from './components/Home';
import Login from './components/Logn';
import Profile from './components/Profile';
import HeaderMenu from './components/HeaderMenu';
class Routing extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route component={HeaderMenu}/>
          <Route exact path='/' component={Index}/>
          <Route exact path='/home' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/profile' component={Profile} />
        </div>
      </Router>
    );
  }
}
export default Routing;