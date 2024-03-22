
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidenav1 from "./Components/Sidenav/Sidenav1"
import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Components/Customer/Customer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AddCustomer from './Components/Customer/AddCustomer';
function Routess() {
  return (

    <Routes>
      <Route path='/' element={<Sidenav1 />} >
        <Route index element={<Dashboard/>}  />
        <Route path='customer' element={<Customer/>}  />

    

      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>
  )
}

export default Routess;