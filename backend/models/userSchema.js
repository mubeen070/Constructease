import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    contactNo: String
});

const userModel = mongoose.model('UserModel', userSchema);

export default userModel;

