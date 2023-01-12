import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import InitialPage from "./Pages/InitialPage/InititalPage";
import Cursos from "./Pages/InitialPage/Cursos/Cursos";
import Olimpiadas from "./Pages/InitialPage/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/InitialPage/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/InitialPage/GagaInsanoResolve/GagaInsanoResolve";
import Login from "./Pages/LoginPage/Login";
import SignUp from "./Pages/SignUpPage/SignUp";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
