import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


import axios from "axios"
import "./Login.css";


const Login = () => {
    
    const [email,setEmail]=React.useState("")
    const [password, setPassword] = React.useState("");
     const navigate=useNavigate()
   
    const handleLogin = () => {
        axios.post("http://localhost:5001/login", { email, password })
            .then(response => {
                console.log(response.auth)
                const { auth, user } = response.data;

                if(auth){
                    localStorage.setItem("user",JSON.stringify(user))
                    localStorage.setItem("auth",JSON.stringify(auth))
                }
                
                
                navigate("/")
            })
            .catch(error => {
                console.error("Error:", error);
            });
    };
    


    return (
        <>
            <div className="container-fluid" >
                <div className="row vh-100">
                    <div
                        className="col-md-7 d-flex align-items-center flex-column vh-100  "
                    // style={{ width: '800px' }}
                    >

                        <div
                            className="col d-flex align-items-center     justify-content-center flex-column"
                            style={{ maxWidth: '400px' }}
                        >

                            <h1>Sign in to your Mailcub Account</h1>
                            <p className="signup">Dont have an account yet? <strong className="for-signup"><Link to={"/signup   "}>Sign up</Link></strong></p>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "15px"

                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Email"
                                    // id="fullWidth"
                                    color="success" 
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}/>
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField 
                                fullWidth 
                                color="success" 
                                label="Password"
                                //  id="fullWidth" 
                                 type="password"
                                 value={password}
                                 onChange={(e) => setPassword(e.target.value)}
                                 />
                            </Box>
                            <p className="forgot-password"> <strong>Forgot your password</strong> </p>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ padding: '12px',  textTransform: 'none' }}
                                onClick={handleLogin}
                            > <strong>Sign In</strong> </Button>



                        </div>

                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center startup-img vh-100"
                    
                    style={{width:"100%"}}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
