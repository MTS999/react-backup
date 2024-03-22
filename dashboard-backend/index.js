// import express, { request, response } from "express"

import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import jwt from "jsonwebtoken"

import "./db/config.js"
import Users from "./db/User.js"


const jwtkey = "mailbox"
const app = express()
app.use(express.json());

app.use(cors())


app.post("/signup", async (req, res) => {
    try {

        let user = new Users(req.body)
        let result = await user.save()
        const { password: userPassword, ...userInfo } = result.toObject();

        jwt.sign({ result }, jwtkey, { expiresIn: "2h" }, (error, token) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Error generating authentication token.");
            }
            console.log(token);
            // Send user and auth token in one response
            res.json({ user:userInfo, auth: token });
        })
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing your request.");
    }

})

app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        // Destructure to exclude password and capture the rest of the properties
        const { password: userPassword, ...userInfo } = user.toObject();

        jwt.sign({ user }, jwtkey, { expiresIn: "2h" }, (error, token) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Error generating authentication token.");
            }
            console.log(token);
            // Send user and auth token in one response
            res.json({ user:userInfo, auth: token });
        })


        // res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while processing your request.");
    }
});




app.listen(5001)