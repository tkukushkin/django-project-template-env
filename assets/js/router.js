import React from 'react';
import { createHistory } from 'history';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './store';

const history = syncHistoryWithStore(browserHistory, store)

export default () => (
  <Router history={ history }>
    <Route path="*" component={ () => <div>404 – Not Found.</div> } />
  </Router>
);
