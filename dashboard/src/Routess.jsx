
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidenav from "./Components/Sidenav/Sidenav"
import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Components/Dashboard/Customer';
function Routess() {
  return (

    <Routes>
      <Route path='/' element={<Sidenav />} >
        <Route path='dashboard' element={<Dashboard/>}  />
        <Route path='customer' element={<Customer/>}  />

    

      </Route>


    </Routes>
  )
}

export default Routess;