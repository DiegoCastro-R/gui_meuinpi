import React from 'react';
import NavBar from '../Components/NavBar';
import Login from '../Pages/Web/Login';
import Cases from '../Pages/Web/Cases';
import Legislacao from '../Pages/Web/Legislacao';
import Tutoriais from '../Pages/Web/Tutoriais';
import Dashboard from '../Pages/Web/Dashboard';
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
      <Route exact path="/legislacao">
        <Legislacao />
      </Route>
      <Route exact path="/tutoriais">
        <Tutoriais />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  );
};

export default WebRoutes;
