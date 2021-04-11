import React from 'react';
import Login from '../Pages/Mobile/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const MobileRoutes: React.FC = () => {
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

export default MobileRoutes;
