import React, { useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import { useLocation } from "react-router-dom";
import "../Signup/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const EditCustomer = () => {

    const [formData, setFormData] = React.useState({

        first_name: "",
        last_name: "",
        email: "",
        industry_type: '',
        profile_image: '',
        phone_number: ""
    })
    const navigate=useNavigate()

    const location = useLocation()
    const [customerData, setCustomerData] = React.useState(location.state)
    console.log(formData);

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value
        })

    }
    useEffect(() => {

        setFormData({
            first_name: customerData.first_name,
            last_name: customerData.last_name,
            email: customerData.user.email,
            industry_type: customerData.industry_type,
            profile_image: customerData.profile_image,
            phone_number: "",
        })


    }, [location.state,customerData])
 
    

    const handleSave = () => {
        const token = localStorage.getItem("token");

        axios.put(`http://146.190.164.174:4000/api/customer/edit_customer_by_admin/${customerData.user._id}`, 
      
        
        formData,
        {
            headers:{
                'Content-Type': 'application/json',

                'x-sh-auth': token

            }
        })
            .then(response => {
                console.log(response.data); // Handle successful response
            })
            .catch(error => {
                console.error('Error signing up customer:', error); // Handle error
            });
    };
    return (
        <>
            <div className="container-fluid  margin-top" >
                <div className="row mb-3 ">

                    <h1>Add Customer</h1>
                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="First Name*"
                                id="first_name"
                                name="first_name"
                                onChange={handleChange}
                                value={formData.first_name}
                            />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Last Name"
                                id="last_name"
                                name="last_name"
                                onChange={handleChange}
                                value={formData.last_name}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box
                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Email"
                                id="email"
                                name="email"
                                onChange={handleChange} 
                                value={formData.email}
                                />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Phone Number"
                                id="phone_number"
                                name="phone_number"
                                onChange={handleChange}
                                value={formData.phone_number}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Industry Type"
                                id="industry_type"
                                name="industry_type"
                                onChange={handleChange}
                                value={formData.industry_type} />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Profile Image"
                                id="profile_image"
                                name="profile_image"
                                onChange={handleChange} 
                                value={formData.profile_image}/>
                        </Box>
                    </div>

                </div>

                <div className="row text-end">
                    <div className="col">


                        <Button 
                        variant="outlined" 
                        size="small"
                         onClick={()=>navigate("/customer")}
                        >
                            cancel
                        </Button>
                        <Button variant="contained" size="small"
                            sx={{ marginLeft: "8px" }}
                            onClick={handleSave}
                        >
                            save
                        </Button>
                    </div>
                </div>


            </div>


        </>
    );
};

export default EditCustomer;
