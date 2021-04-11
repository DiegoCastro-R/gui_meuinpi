import React from 'react';
import Login from '../Pages/Mobile/Login';
import Cases from '../Pages/Mobile/Cases';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MobileRoutes: React.FC = () => {
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

export default MobileRoutes;
