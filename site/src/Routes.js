import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

/* páginas públicas */
import InitialPage from "./Pages/Public/InitialPage/InitialPage";
import CoursesPreview from "./Pages/Public/CoursesPreview/CoursesPreview";
import OlympiadPreview from "./Pages/Public/OlympiadPreview/OlympiadPreview";
import Login from "./Pages/Public/Login/Login";
import Register from "./Pages/Public/Register/Register";

/* páginas privadas */
import AdmDashboard from "./Pages/Private/AdmDashboard/AdmDashboard";
import Dashboard from "./Pages/Private/Dashboard/Dashboard";
import Course from "./Pages/Private/Course/Course";

const func = () => {
    return(
         <BrowserRouter>
             <Routes>
                 <Route component = { InitialPage }  path="/" exact />
             </Routes>
         </BrowserRouter>
    )
 }
 
 export default func;