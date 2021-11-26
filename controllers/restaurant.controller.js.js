const RestaurantModel = require("../models/Restaurant.model.js");



const saveRestaurant = async (req, res) => {
  try {

    
    const {  name , address , phone , image} = req.body;

    await new PartnerModel({         
     name,address,phone,image
    }).save();

    return res.json({
      response: "Restaurant Profile saved successfully.",
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      error,
      success: false,
    });
  }
};

const getRestaurantById = async (req, res) => {
  try {
    const { id } = req.params;

    const restaurant = await RestaurantModel.findById(id);

    return res.json({
      data: restaurant,
      
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find();

    return res.json({
      data: restaurants,
      documents: restaurants.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    const { id } = req.params;

    await RestaurantModel.findByIdAndRemove(id);
    return res.json({
      data: null,
      response: "Restaurant profile deleted successfuly",
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    const { name ,address,phone,image } = req.body;
    const { id } = req.params;

    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
      id,
      {
        name ,address,phone,image
        
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedRestaurant,
      response: "Restaurant profile updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  saveRestaurant,
  getRestaurants,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
};
