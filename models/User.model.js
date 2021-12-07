const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    phoneNo: Number,
    image: String
});

module.exports = mongoose.model('user', UserSchema);