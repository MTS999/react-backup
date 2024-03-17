
import React from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// import "./Signup.css"


const Signup = () => {


    return (

        <>
            <div className="main-login">


                <div className="login-container">
                    <div className="login-info">


                        <h1 className="signup-heading">Get started with a forever free plan</h1>
                        <p className="signup">Sign up in seconds. No credit card required</p>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "15px"

                            }}
                        >
                            <TextField  color="success"  fullWidth label="Full Name*" id="fullWidth" />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "22px"
                            }}
                        >
                            <TextField  color="success"  fullWidth label="Last Name" id="fullWidth" />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "22px"
                            }}
                        >
                            <TextField  color="success"  fullWidth label="Email" id="fullWidth" />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "22px"
                            }}
                        >
                            <TextField   color="success"  fullWidth label="Phone" id="fullWidth" />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "22px"
                            }}
                        >
                            <TextField  color="success"  fullWidth label="Password" id="fullWidth" />
                        </Box>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ padding: '12px' }}
                        >Contained</Button>



                    </div>

                </div>
                <div className="startup-img">
                    <h1>mts</h1>
                </div>

            </div>
        </>



    )
}

export default Signup