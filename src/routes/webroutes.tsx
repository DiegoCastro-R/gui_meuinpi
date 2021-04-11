import React from 'react';
import Login from '../Pages/Web/Login';
import Cases from '../Pages/Web/Cases';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const WebRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/cases">
          <Cases />
        </Route>
      </Switch>
    </Router>
  );
};

export default WebRoutes;
