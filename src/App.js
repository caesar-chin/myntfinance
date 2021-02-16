import React from 'react';
import './App.css';

import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import Manage from './pages/manage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/manage' component={Manage} exact />
      </Switch>
    </Router>
  );
}

export default App;
