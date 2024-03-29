import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const userSchema = mongoose.Schema({
    uName: String,
    email: String,
    password: String,
    contactNo: String,
    profilePic: String,

    tokens: [
        {
            token: {
                type: String,
                require: true
            }
        }
    ]
}
    , {
        timestamps: true
    })
userSchema.pre('save', function (next) {
    var salt = bcrypt.genSaltSync(10);
    if (this.password && this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, salt);
    }
    next();

})
userSchema.methods.getAuthToken = async function (data) {
    let params = {
        id: this._id,
        email: this.email
    }
    var tokenValue = jwt.sign(params, 'dpsakdokqwoekqoekq2131dksadjasdaksdjkasjdkasjdkasjdkasjdaksjdaksjdaksjdkas', {expiresIn:'30000s'})
    this.tokens = this.tokens.concat({ token: tokenValue });
    await this.save();
    return tokenValue;
}

const userModel = mongoose.model('UserModel', userSchema);

export default userModel;