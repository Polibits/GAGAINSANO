import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

/* páginas públicas */
import Home from "./Pages/Public/Home/Home";
import CoursesPreview from "./Pages/Public/CoursesPreview/CoursesPreview";
import OlympiadPreview from "./Pages/Public/OlympiadPreview/OlympiadPreview";
import GagaInsanoResolve from "./Pages/Public/GagaInsanoResolve/GagaInsanoResolve";
import Login from "./Pages/Public/Login/Login";
import Register from "./Pages/Public/Register/Register";

/* páginas privadas */
import AdmDashboard from "./Pages/Private/AdmDashboard/AdmDashboard";
import Dashboard from "./Pages/Private/Dashboard/Dashboard";
import Course from "./Pages/Private/Course/Course";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element = {< Home />}  path="/"/>
          <Route element = {< CoursesPreview />}  path="/cursos"/>
          <Route element = {< OlympiadPreview />}  path="/olimpiadas"/>
          <Route element = {< GagaInsanoResolve />}  path="/gagainsanoresolve"/>
          <Route element = {< Login />}  path="/login"/>
          <Route element = {< Register />}  path="/registro"/>

          <Route element = {< AdmDashboard />}  path="/administracao"/>
          <Route element = {< Dashboard />}  path="/dashboard"/>
          <Route element = {< Course />}  path="/curso"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;