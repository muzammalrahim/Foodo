const restaurantModel = require("../models/Restaurant");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require('../middleware/async');
const DealModel = require("../models/Deals.model");

module.exports = {
  createRestaurant: asyncHandler (async (req, res, next) => {
    try {
      const restaurant = await restaurantModel.create(req.body);
      if (restaurant) {
        return res.status(201).json({
          response: "Restaurant Profile created successfully.",
          success: true,
        });
      } else {return next(new ErrorResponse('db_error', 422))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),
  
  getRestaurants: asyncHandler (async (req, res, next) => {
    try {
      const restaurant = await restaurantModel.findById(req.params.id);
      if (restaurant) {
        return res.status(201).json({
          data: restaurant,
          success: true,
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (error) {
        console.log(err);
        return next(new ErrorResponse('server error', 505))
    }
  }),

  getRestaurant: asyncHandler (async (req, res, next) => {
    try {
      const restaurants = await restaurantModel.find();
      if (restaurants) {
        return res.status(200).json({
          data: restaurants,
          documents: restaurants.length,
          success: true,
        });
      } else {return new ErrorResponse('no record found', 404)}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),
  
  deleteRestaurant: asyncHandler (async (req, res, next) => {
    try {
      const restaurant = await restaurantModel.findByIdAndRemove(req.params.id);
      if (restaurant) {
        return res.status(200).json({
          response: "Restaurant profile deleted successfuly",
          success: true,
          data: null,
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),
  
  updateRestaurant: asyncHandler (async (req, res, next) => {
    try {
      const updatedRestaurant = await restaurantModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (updatedRestaurant) {
        return res.status(200).json({
          data: updatedRestaurant,
          response: "Restaurant profile updated successfuly",
          success: true,
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),

  createDeal: asyncHandler (async (req, res, next) => {
    try {
      const deal = await DealModel.create(req.body);
      if (deal) {
        return res.status(201).json({
          data: deal,
          response: "deal created successfully",
          success: true
      })
      } else {return next(new ErrorResponse('db_error', 422))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),

  getDeals: asyncHandler (async (req, res, next) => {
    try {
    const deal = await DealModel.findById(req.params.id);
    if (deal) {
      return res.status(200).json({
        data: deal,
        success: true,
    });
    } else {return new ErrorResponse('no record found', 404)}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),

  getDeal: asyncHandler (async (req, res, next) => {
    try {
      const deal = await DealModel.find().populate("restaurantId");
      if (deal) {
        return res.status(200).json({
          data: deal,
          success: true,
        });
      } else {return new ErrorResponse('no record found', 404)}
      } catch (err) {
          console.log(err);
          return next(new ErrorResponse('server error', 500))
    }
  }),

  updateDeal: asyncHandler (async (req, res, next) => {
    try {      
      const updateDeal = await DealModel.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      });
      if (updateDeal) {
        return res.status(200).json({
          data: updateDeal,
          response: "deal updated successfully",
          success: true,
        });
      } else {return next(new ErrorResponse('no record found', 400))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),

  deleteDeal: asyncHandler (async (req, res, next) => {
    try {
      const deal = await DealModel.findByIdAndRemove(req.params.id);
      if (deal) {
        return res.status(200).json({
          data: null,
          response: "deals deleted successfully",
          success: true
      });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
        console.log(err);
        return next(new ErrorResponse('server error', 500))
    }
  }),
}