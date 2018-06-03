import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { async } from 'react-redux';

import Home from './containers/Home';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Redirect to="/home" />
      </Switch>
    );
  }
}

export default Routes;
