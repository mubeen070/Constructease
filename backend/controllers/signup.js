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

export const deleteUsers = async (request, response) => {
    try {
        console.log(request.params.id)
        await userModel.deleteOne({ _id: request.params.id });
        response.status(201).json("Product deleted Successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


export const getUserById = async (request, response) => {
    try {
        const prod = await userModel.findById(request.params.id);
        response.status(200).json(prod);
    } catch (error) {
        response.status(404).json({ message: error.message })
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
        var match = await bcrypt.compare(req.body.password, user.password)
        if (match) {
            let myToken = await user.getAuthToken();
            responseType.message = "Login Successfully!"
            responseType.token = myToken;
        } else {
            responseType.message = "invalid password!"
        }
    } else {

        responseType.message = "Invalid Email Id"
    }
    res.status(200).json({ message: "ok", data: responseType })
}

export const showUsers = async (req, res) => {
    userModel.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
}


export const editUser = async (request, response) => {
    let user = request.body;
    const editUser = new userModel(user);
    try {
        await userModel.updateOne({ _id: request.params.id }, editUser);
        response.status(201).json(editUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
} 