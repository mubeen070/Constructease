import userModel from "../models/userSchema.js";
import bcrypt from 'bcrypt';
export const signup = async (req, res) => {
    try {

        const name = req.body.uName;
        const nametoString = name.toString();

        const email = req.body.email;
        const emailtoString = email.toString();

        const password = req.body.password;
        const passtoString = password.toString();

        const contact = req.body.contactNo;
        const contactToString = contact.toString();

        const profilePic = req.body.profilePic;
        const picToString = profilePic.toString();

        const data = new userModel({
            uName: nametoString,
            email: emailtoString,
            password: passtoString,
            contactNo: contactToString,
            profilePic: picToString
        })
        await data.save();
        let myToken = await data.getAuthToken();
        res.status(200).json({ message: "Success", token: myToken })
    } catch (error) {
        res.send(error.message)
    }
}
export const login = async (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.status(301).json({ message: 'Error', message: "Please select email/password" });
    }
    let user = await userModel.findOne({ email: req.body.email });
    var responseType = {
        message: 'ok'
    }
    if (user) {
        console.log(user.password)
        var match = await bcrypt.compare(req.body.password, user.password)
        if (match) {
            responseType.message = "Login Successfully!"
            responseType.token = "ok"
        } else {
            responseType.message = "invalid password!"
        }
    } else {
        responseType.message = "Invalid Email Id"
    }
    console.log(user);
    res.status(200).json({ message: "ok", data: responseType})


}
export const showUsers = async (req, res) => {
    userModel.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
};
