import React from 'react';
import Login from '../src/Pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
