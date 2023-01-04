import userModel from "../models/userSchema.js";
import express from 'express'

export const signup = async (req, res) => {
    console.log("post api reached");
    const result = req.body;
    const uName = req.body.uName;
    const nameTostring = uName.toString();

    const email = req.body.email;
    const emailTostring = email.toString();

    const password = req.body.password;
    const passTostring = password.toString();

    const contactNo = req.body.contactNo;
    const contactTostring = contactNo.toString();


    const newUser = new userModel({
        name: nameTostring,
        email: emailTostring,
        password: passTostring,
        contactNo: contactTostring,
    });

    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
        res.status(422).json({ error: "User Already found" });
    }
    else {
        try {
            await newUser.save();
            res.json(newUser);

        } catch (error) {
            res.send("Error registering new user!");

        }
    }

}
