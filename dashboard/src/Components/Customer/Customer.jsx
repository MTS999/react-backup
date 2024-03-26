import * as React from 'react';
import AddCustomer from './AddCustomer';
import CustomerData from './CustomerData';
import Dialog1 from './Dialog1';
export default function Customer() {
 
  return (
    <>
  
      <div className="container table-margin">
        {/* <AddCustomer /> */}
        <CustomerData/>
        
      </div >
    </>
  );
}