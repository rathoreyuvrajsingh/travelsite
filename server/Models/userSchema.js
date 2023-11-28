import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
   
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
});


const User = mongoose.model("traveldatacollections", userSchema);
export default User;
