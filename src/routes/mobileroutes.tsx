import React from 'react';
import NavBar from '../Components/NavBar';
import Login from '../Pages/Mobile/Login';
import Cases from '../Pages/Mobile/Cases';
import Legislacao from '../Pages/Mobile/Legislacao';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const MobileRoutes: React.FC = () => {
  return (
    <Router>
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/cases">
        <Cases />
      </Route>
      <Route exact path="/legislacao">
        <Legislacao />
      </Route>
    </Router>
  );
};

export default MobileRoutes;
