const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema({
    name: String,
    unitPrice: Number,
    discountPrice: Number,
    image: String
});

module.exports = mongoose.model('deal', DealSchema);