import userModel from "../models/userSchema.js";

export const signup = async (req, res) => {
    console.log("post api reached")
    const result = req.body;
    const uName = req.body.uName;
    const nameTostring = uName.toString();

    const email = req.body.email;
    const emailTostring = email.toString();

    const password = req.body.password;
    const passTostring = password.toString();

    const contactNo = req.body.contactNo;
    const contactTostring = contactNo.toString();


    const dobirth = req.body.dobirth;
    const dobirthTostring = dobirth.toString();


    const newUser = new userModel({
        name: nameTostring,
        email: emailTostring,
        password: passTostring,
        contactNo: contactTostring,
        dofBirth: dobirthTostring
    });

    try {
        const userExist = await userModel.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "User Already found" });
        }
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.send("Error registering new user!")
    }

}

// export const signup = async (req, res) => {
//     console.log("sign up page")

//     const { name, email, password, contactNo, dofBirth } = req.body;

//     if (!name || !email || password || contactNo || dofBirth) {
//         return res.status(422).json({ error: "Complete filling the form!" });
//     }
//     try {
//         const userExist = await userModel.findOne({ email: email });
//         if (userExist) {
//             return res.status(422).json({ error: "User Already found" });
//         }
//         const newUser = new userModel({ name, email, password, contactNo, dofBirth });
//         await newUser.save();
//         res.status(201).json({ message: "Regiestered Successfully!" })
//     } catch (error) {
//         console.log(err);
//     }
// }
// export default signup;