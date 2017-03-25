
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Sales from './components/Sales';
import Visualization from './components/Visualization';


const Routes = () => (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Sales}/>
        <Route path="/visualization" component={Visualization} />
      </Route>
    </Router>
);

export default Routes;
