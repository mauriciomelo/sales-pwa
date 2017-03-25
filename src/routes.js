
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './App';
import Sales from './components/Sales';
import Visualization from './components/Visualization';
import { createHashHistory } from 'history';

const history = createHashHistory();
const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Sales}/>
      <Route path="/visualization" component={Visualization} />
    </Route>
  </Router>
);

export default Routes;
