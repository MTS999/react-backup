import mongoose, { mongo }  from "mongoose";
const {Schema}=mongoose

const UserSchema=new  Schema({

    firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true,
        unique: true // Assuming each phone number should be unique
      },
      email: {
        type: String,
        required: true,
        unique: true // Assuming each email address should be unique
      },
      password: {
        type: String,
        required: true
      }

})

const User=mongoose.model("users",UserSchema,"users")

export default User