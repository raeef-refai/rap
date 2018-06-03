import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store, { history } from './redux/store';
import Routes from './Routes';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
