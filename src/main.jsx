import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashbord/Dashboard';
import Admin from './Pages/Admin/Admin';
import Environment from './Pages/Environments/Environment';
import Tasks from './Pages/Task/Tasks';
import NoPage from './Pages/NoPage/NoPage';
import Teams from './Pages/Teams/Teams';
import Login from './Pages/Login/Login';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>} />
        <Route path="admin" element={<Admin />} />
        <Route path="environment" element={<Environment />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="teams" element={<Teams />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
