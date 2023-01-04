import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    contactNo: String,
    dofBirth: String
});

const userModel = mongoose.model('UserModel', userSchema);

export default userModel;

