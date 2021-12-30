const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name: String,
    description: String,
    phoneNo: String,
    address: String,
    image: String,
    userId: { type: mongoose.Schema.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Restaurant", restaurantSchema)