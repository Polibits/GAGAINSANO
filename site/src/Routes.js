import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import InitialPage from "./Pages/InitialPage/InititalPage";
import Cursos from "./Pages/InitialPage/Cursos/Cursos";
import Olimpiadas from "./Pages/InitialPage/Olimpíadas/Olimpiadas";
import MateriaisGratuitos from "./Pages/InitialPage/Materiais Gratuitos/MateriaisGratuitos";
import GagaInsanoResolve from "./Pages/InitialPage/GagaInsanoResolve/GagaInsanoResolve";

const func = () => {
   return(
        <BrowserRouter>
            <Routes>
                <Route component = { InitialPage }  path="/" exact />
                <Route component = { Cursos }  path="/cursos" />
                <Route component = { Olimpiadas }  path="/olimpiadas" />
                <Route component = { MateriaisGratuitos } path="/MateriaisGratuitos" />
                <Route component = { GagaInsanoResolve } path="/GagaInsanoResolve" />
            </Routes>
        </BrowserRouter>
   )
}

export default func;