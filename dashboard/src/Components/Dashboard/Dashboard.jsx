// import React from 'react'
import GroupIcon from '@mui/icons-material/Group';
import DomainIcon from '@mui/icons-material/Domain';
import DomainDisabledIcon from '@mui/icons-material/DomainDisabled';




function Dashboard() {
  return (

    <>
   

      <div className="container margin-top">

        <div className="roe"><h1>Hi Welcome</h1></div>
        <div className="row mt-500  d-flex align-items-start  justify-content-center    ">

          <div className="col-sm   d-flex justify-content-center align-items-start   ">
            <div className="card mb-3 text-center" style={{ width: "25rem",height:"13rem" }}>
              <div className="card-body first-bg-color d-flex justify-content-center align-items-center flex-column">
              <GroupIcon/>
                <h4  className="card-text   "  style={{marginTop:"20px",fontSize: '2rem' ,fontWeight:"bold"}}>636</h4>
                <p className="card-text">Total Users</p>
              </div>
            </div>

          </div>
          <div className="col-sm   d-flex justify-content-center align-items-center  ">
            <div className="card text-center mb-3" style={{ width: "25rem",height:"13rem" }}>
              <div className="card-body second-bg-color d-flex justify-content-center align-items-center flex-column">
              <DomainIcon/>
                <h4  className="card-text   "  style={{marginTop:"20px",fontSize: '2rem' ,fontWeight:"bold"}}>94</h4>
                <p className="card-text">Domains</p>
              </div>
            </div>
          </div>
          <div className="col-sm  d-flex justify-content-center align-items-center ">
            <div className="card text-center mb-3  " style={{ width: "25rem",height:"13rem" }}>
              <div className="card-body third-bg-color d-flex justify-content-center align-items-center flex-column "
                >
                <DomainDisabledIcon/>
                <h4  className="card-text   "  style={{marginTop:"20px",fontSize: '2rem' ,fontWeight:"bold"}}>94</h4>
                <p className="card-text">Unverified Domains</p>


              </div>
            </div>
          </div>
        </div>



      </div>
    </>

  )
}

export default Dashboard