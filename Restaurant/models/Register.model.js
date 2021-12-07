const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const RegisterSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    confirmPassword: String,
    email: {
        type: String,
        unique: [true, "this email is already registered"]
    },
    address: String,
    phoneNo: Number,
    tokens: [
        {token: {
            type: String,
            required: true
        }}
    ],
});

// generating tokens

RegisterSchema.methods.generateAuthToken = async function (){
    try {
        const token = jwt.sign({_id:this._id.toString()}, process.env.SECRET_KEY);
        // console.log(token);
        this.tokens = this.tokens.concat({token});
        await this.save();
        return token;
    } catch (err) {
        console.log(`the error part ${error}`)
    }
}

// converting password into hash
RegisterSchema.pre('save', async function (next) {

    if (this.isModified("password")) {
        // console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
        // console.log(`the current password is ${this.password}`);
    }
    next();
})

module.exports = mongoose.model('register', RegisterSchema);