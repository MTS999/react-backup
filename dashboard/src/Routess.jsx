
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Sidenav1 from "./Components/Sidenav/Sidenav1"
import Dashboard from './Components/Dashboard/Dashboard';
import Customer from './Components/Customer/Customer';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AddCustomer from './Components/Customer/AddCustomer';
import CustomerData from './Components/Customer/CustomerData';
import EditCustomer from "./Components/Customer/EditCustomer"
function Routess() {
  return (

    <Routes>
      <Route path='/' element={<Sidenav1 />} >
        <Route path='dashboard' element={<Dashboard/>}  />
        <Route path='addcustomer' element={<AddCustomer/>}  />
        <Route path='editcustomer' element={<EditCustomer/>}  />
        <Route path='customer' element={<Customer/>}  />

    

      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />


    </Routes>
  )
}

export default Routess;