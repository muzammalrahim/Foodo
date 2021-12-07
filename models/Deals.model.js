const mongoose = require("mongoose");

const DealSchema = new mongoose.Schema({
  dealData: [
    {
      _1d: mongoose.Schema.ObjectId,
      name: String,
      unitPrice: Number,
      discountPrice: Number,
      image: String,
      restaurantId: { type: mongoose.Schema.ObjectId, ref: "restaurant" }
    }
  ]
});

module.exports = mongoose.model('deal', DealSchema);