import React from 'react';
import Login from '../Pages/Web/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const WebRoutes: React.FC = () => {
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

export default WebRoutes;
