import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

import InitialPage from "./Pages/PublicArea/InitialPage/InititalPage";
import Cursos from "./Pages/PublicArea/Cursos/Cursos";
import Olimpiadas from "./Pages/PublicArea/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/PublicArea/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/PublicArea/GagaInsanoResolve/GagaInsanoResolve";

import Login from "./Pages/PublicArea/LoginPage/Login";
import SignUp from "./Pages/PublicArea/SignUpPage/SignUp";

import Dashboard from './Pages/PrivateArea/Dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element = {< InitialPage />}  path="/dashboard"/>
          <Route element = {< Cursos />}  path="/cursos" />
          <Route element = {< Olimpiadas />}  path="/olimpiadas" />
          <Route element = {< MateriaisGratuitos />} path="/MateriaisGratuitos" />
          <Route element = {< GagaInsanoResolve />} path="/GagaInsanoResolve" />
          
          <Route element = {< Login />} path="/Login" />
          <Route element = { <SignUp /> } path="/SignUp" />

          <Route element = { <Dashboard /> } path="/" exact/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

/*
import Olimpiadas from "./Pages/PublicArea/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/PublicArea/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/PublicArea/GagaInsanoResolve/GagaInsanoResolve";

import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";
import Dashboard from './Pages/Dashboard/Dashboard';

          <Route element = {< Olimpiadas />}  path="/olimpiadas" />
          <Route element = {< MateriaisGratuitos />} path="/MateriaisGratuitos" />
          <Route element = {< GagaInsanoResolve />} path="/GagaInsanoResolve" />
          <Route element = {< Login />} path="/Login" />
          <Route element = { <SignUp /> } path="/SignUp" />
          <Route element = { <Dashboard /> } path="/dashboard"/>
 */
