const mongoose = require("mongoose");
                
const RestaurantSchema = new mongoose.Schema({
  name:String,
  address:String,
  phone:String,
  image:String
}); 

module.exports = mongoose.model("restaurant", RestaurantSchema);
