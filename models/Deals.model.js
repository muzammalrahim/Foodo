const mongoose = require("mongoose");

const DealsSchema = new mongoose.Schema({
  name: String,
  originalPrice: Number,
  discountPrice: Number,
  description: String,
  image: String,
  restaurantId: { type: mongoose.Schema.ObjectId, ref: "User", required: [true] }
},
);

module.exports = mongoose.model('Deal', DealsSchema);