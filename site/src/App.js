import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import InitialPage from "./Pages/InitialPage/InititalPage";
import Cursos from "./Pages/Cursos/Cursos";
import Olimpiadas from "./Pages/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/GagaInsanoResolve/GagaInsanoResolve";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element = {< InitialPage />}  path="/" exact />
          <Route element = {< Cursos />}  path="/cursos" />
          <Route element = {< Olimpiadas />}  path="/olimpiadas" />
          <Route element = {< MateriaisGratuitos />} path="/MateriaisGratuitos" />
          <Route element = {< GagaInsanoResolve />} path="/GagaInsanoResolve" />
          <Route element = {< Login />} path="/Login" />
          <Route element = { <SignUp /> } path="/SignUp" />
          <Route element = { <Dashboard /> } path="/dashboard" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
