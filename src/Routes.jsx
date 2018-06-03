import React, { Component } from 'react';
import SwaggerParser from 'swagger-parser';

import { async } from 'react-redux';
import { resolve } from 'react-resolver';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './containers/Home';

@resolve('openapi', () => {

})
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
