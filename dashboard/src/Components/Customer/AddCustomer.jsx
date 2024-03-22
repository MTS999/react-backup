import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import "../Signup/Signup";


const AddCustomer = () => {
    return (
        <>
            <div className="container-fluid mt-5" >
                <div className="row mb-3 ">

                    <h1>Add Customer</h1>
                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField color="success" fullWidth label="Full Name*" id="fullWidth" />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField color="success" fullWidth label="Last Name" id="fullWidth" />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box
                        >
                            <TextField color="success" fullWidth label="Full Name*" id="fullWidth" />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField color="success" fullWidth label="Last Name" id="fullWidth" />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField color="success" fullWidth label="Full Name*" id="fullWidth" />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField color="success" fullWidth label="Last Name" id="fullWidth" />
                        </Box>
                    </div>

                </div>

                <div className="row text-end">
                    <div className="col">

                    
                    <Button variant="outlined" size="small">
                        cancel
                    </Button>
                    <Button variant="contained" size="small"
                    sx={{marginLeft:"8px"}}
                    >
                        save
                    </Button>
                    </div>
                </div>


            </div>


        </>
    );
};

export default AddCustomer;
