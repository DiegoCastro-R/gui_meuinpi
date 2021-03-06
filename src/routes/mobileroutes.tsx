import React from 'react';
import NavBar from '../Components/NavBar';
import Login from '../Pages/Mobile/Login';
import Cases from '../Pages/Mobile/Cases';
import Legislacao from '../Pages/Mobile/Legislacao';
import Tutoriais from '../Pages/Mobile/Tutoriais';
import Dashboard from '../Pages/Mobile/Dashboard';
import MeusRegistros from '../Pages/Mobile/MeusRegistros';
import Checklist from '../Pages/Mobile/Checklist';
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
      <Route exact path="/tutoriais">
        <Tutoriais />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/registros">
        <MeusRegistros />
      </Route>
      <Route exact path="/checklist">
        <Checklist />
      </Route>
    </Router>
  );
};

export default MobileRoutes;
