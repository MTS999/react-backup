
import React from "react"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import "./Login.css"


const Login = () => {


    return (

        <>
            <div className="main-login">


                <div className="login-container">
                    <div className="login-info">


                        <h1>Sign in to your Mailcub Account</h1>
                        <p className="signup">Dont have an account yet? <strong className="for-signup">Sign up</strong></p>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "15px"

                            }}
                        >
                            <TextField 
                            fullWidth
                            label="Email"
                            id="fullWidth"
                            color="success"  />
                        </Box>
                        <Box
                            sx={{
                                width: 500,
                                maxWidth: '100%',
                                marginBottom: "22px"
                            }}
                        >
                            <TextField fullWidth color="success" label="Password" id="fullWidth" />
                        </Box>
                        <p className="forgot-password"> <strong>Forgot your password</strong> </p>
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

export default Login