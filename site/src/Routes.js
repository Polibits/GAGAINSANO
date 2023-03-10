import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import InitialPage from "./Pages/PublicArea/InitialPage/InititalPage";
import Cursos from "./Pages/PublicArea/InitialPage/Cursos/Cursos";
import Olimpiadas from "./Pages/PublicArea/InitialPage/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/PublicArea/InitialPage/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/PublicArea/InitialPage/GagaInsanoResolve/GagaInsanoResolve";
import Dashboard from './Pages/PublicArea/Dashboard/Dashboard';

const func = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route component = { InitialPage }  path="/" exact />
                <Route component = { Cursos }  path="/cursos" />
                <Route component = { Olimpiadas }  path="/olimpiadas" />
                <Route component = { MateriaisGratuitos } path="/MateriaisGratuitos" />
                <Route component = { GagaInsanoResolve } path="/GagaInsanoResolve" />
                <Route component = { Dashboard } path="/dashboard" />
            </Routes>
        </BrowserRouter>
   )
}

export default func;
