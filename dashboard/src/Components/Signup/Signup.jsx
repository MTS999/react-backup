import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        axios.post("http://146.190.164.174:4000/api/admin/signup_admin", {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            status: true
        })
        .then(response => {
            console.log(response.data);
            // Assuming the response structure matches the successful signup response
            if (response.data.code === 200) {
                // Signup successful, redirect to homepage or login page
                navigate("/");
            } else {
                // Handle other possible response scenarios
                console.error("Signup failed:", response.data.message);
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
                <div className="col-md-7 d-flex align-items-center flex-column vh-100">
                    <div className="col d-flex align-items-center justify-content-center flex-column" style={{ maxWidth: '400px' }}>
                        <h1 className="signup-heading">Get started with a forever free plan</h1>
                        <p className="signup">Sign up in seconds. No credit card required</p>
                        <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "15px" }}>
                            <TextField
                                fullWidth
                                label="First Name*"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                color="success"
                            />
                        </Box>
                        <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "22px" }}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                color="success"
                            />
                        </Box>
                        <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "22px" }}>
                            <TextField
                                fullWidth
                                label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                color="success"
                            />
                        </Box>
                        <Box sx={{ maxWidth: 400, width: '100%', marginBottom: "22px" }}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                color="success"
                            />
                        </Box>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ padding: '12px' }}
                            onClick={handleSignup}
                        >Signup</Button>
                    </div>
                </div>
                <div className="col-sm d-flex align-items-center justify-content-center startup-img vh-100" style={{ width: "100%" }}>
                </div>
            </div>
        </div>
    );
};

export default Signup;
