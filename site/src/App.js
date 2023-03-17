import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

/* páginas públicas */
import Home from "./Pages/Public/Home/Home";
import CoursesPreview from "./Pages/Public/CoursesPreview/CoursesPreview";
import OlympiadPreview from "./Pages/Public/OlympiadPreview/OlympiadPreview";
import GagaInsanoResolve from "./Pages/Public/GagaInsanoResolve/GagaInsanoResolve";
import FreeContent from './Pages/Public/FreeContent/FreeContent';
import Login from "./Pages/Public/Login/Login";
import Register from "./Pages/Public/Register/Register";

/* páginas privadas */
import AdmCourses from './Pages/Private/adm/courses/AdmCourses';
import AdmDashboard from './Pages/Private/adm/dashboard/AdmDashboard';
import StudentCourses from './Pages/Private/student/courses/StudentCourses';
import StudentDashboard from './Pages/Private/student/dashboard/StudentDashboard';
import ProfessorCourses from './Pages/Private/professor/courses/ProfessorCourses';
import ProfessorDashboard from './Pages/Private/professor/dashboard/ProfessorDashboard';

/* página de desenvolvedores */
import Debug from './Pages/Debug/Debug';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element = {< Home />}  path="/"/>
          <Route element = {< CoursesPreview />}  path="/cursos"/>
          <Route element = {< OlympiadPreview />}  path="/olimpiadas"/>
          <Route element = {< GagaInsanoResolve />}  path="/gagainsanoresolve"/>
          <Route element = {< FreeContent />}  path="/materiaisgratuitos"/>
          <Route element = {< Login />}  path="/login"/>
          <Route element = {< Register />}  path="/registro"/>

          <Route element = {< AdmCourses />}  path="/administrador/cursos"/>
          <Route element = {< AdmDashboard />}  path="/administrador/dashboard"/>
          <Route element = {< StudentCourses />}  path="/estudante/cursos"/>
          <Route element = {< StudentDashboard />}  path="/estudante/dashboard"/>
          <Route element = {< ProfessorCourses />}  path="/professor/cursos"/>
          <Route element = {< ProfessorDashboard />}  path="/professor/dashboard"/>

          <Route element = {< Debug />}  path="/debug"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;