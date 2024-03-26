import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import img from "../images/ClubNetlogo-copy.png"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post("http://146.190.164.174:4000/api/app_api/login", {
            email,
            password,
            type: 0
        })
        .then(response => {
            console.log(response.data);
            if (response.data.code === 200) {
                localStorage.setItem("token", response.data.token);
                // localStorage.setItem("user", JSON.stringify(response.data.user));
                navigate("/"); // Redirect to dashboard or home page
            } else {
                // Handle other possible response scenarios
                console.error("Login failed:", response.data.message);
            }
        })
        .catch(error => {
            console.error("Error:", error);
            // Handle error scenarios
        });
    };

    return (
        <div className="container-fluid">
            <div className="row vh-100">
                <div className="col-md-7 d-flex flex-column vh-100">
                    <div className="row d-flex justify-content-center ">
                        <div className="col-md-3 d-flex justify-content-center mrg-top">
                            <img className="lop" src={img} alt="" />
                        </div>
                        <div className="col-md d-flex align-items-center justify-content-center flex-column login-margin" style={{ maxWidth: '400px',marginTop:"150px" }}>
                            <h1>Sign in to your Mailcub Account</h1>
                            <p className="signup"> do not have an account yet? <strong className="for-signup"><Link to={"/signup"}>Sign up</Link></strong></p>
                            <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "15px" }}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    color="success"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Box>
                            <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "22px" }}>
                                <TextField
                                    fullWidth
                                    color="success"
                                    label="Password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Box>
                            <p className="forgot-password"> <strong>Forgot your password</strong> </p>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ padding: '12px', textTransform: 'none' }}
                                onClick={handleLogin}
                            > <strong>Sign In</strong> </Button>
                        </div>
                    </div>
                </div>
                <div className="col-sm d-flex align-items-center justify-content-center startup-img vh-100" style={{ width: "100%" }}>
                </div>
            </div>
        </div>
    );
};

export default Login;
