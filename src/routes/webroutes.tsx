import React from 'react';
import NavBar from '../Components/NavBar';
import Login from '../Pages/Web/Login';
import Cases from '../Pages/Web/Cases';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const WebRoutes: React.FC = () => {
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
    </Router>
  );
};

export default WebRoutes;
