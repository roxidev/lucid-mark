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
import GridView from './Pages/View/GridView';
import Account from './Pages/Account/Account';
import Automate from './Pages/Automate/Automate';
import ZinBook from './Pages/ZinBook/ZinBook';
import EventDetails from './Pages/EventDetails/EventDetails';


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
        <Route path="gridview" element={<GridView />} />       
        <Route path="account" element={<Account />} />       
        <Route path="automate" element={<Automate />} />       
        <Route path="zinbook" element={<ZinBook />} />       
        <Route path="eventdetails" element={<EventDetails />} />       
               
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
