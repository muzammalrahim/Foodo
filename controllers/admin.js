const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const DealModel = require("../models/Deals.model");

module.exports = {

  // ---User--- //

  createUser: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      if (user) {
        return res.status(201).json({
          response: "create user successfully",
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('db_error', 422))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),
  
  updateUser: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  getUsers: asyncHandler(async (req, res, next) => {
    try {
      let role = (req.query.role) ? req.query.role : ['admin', 'user', 'subadmin', 'restaurantManager']
      const user = await User.find().where('role').in(role)
      console.log(user);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),
  
  getUser: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),
    
  deleteUser: asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json({
        response: "record deleted successfully",
        success: true,
        data: null
      });
    } else {return next(new ErrorResponse('no record found', 404))}
  } catch (err) {
    console.log(err);
    return next(new ErrorResponse('server error', 500))
  }
  }),

  // ---Sub Admin--- //

  createSubAdmin: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      if (user) {
        return res.status(201).json({
          response: "create user successfully",
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('db_error', 422))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  getSubAdmins: asyncHandler(async (req, res, next) => {
    try {
      let role = (req.query.role) ? req.query.role : ['admin', 'user', 'subadmin', 'restaurantManager']
      const user = await User.find().where('role').in(role)
      console.log(user);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  getSubAdmin: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  updateSubAdmin: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  deleteSubAdmin: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (user) {
        return res.status(200).json({
          response: "record deleted successfully",
          success: true,
          data: null
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  // ---Restaurant--- //

  createRestaurant: asyncHandler (async (req, res, next) => {
    try {
      const restaurant = await User.create(req.body);
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

  getRestaurants: asyncHandler(async (req, res, next) => {
    try {
      let role = (req.query.role) ? req.query.role : ['admin', 'user', 'restaurantManager']
      const user = await User.find().where('role').in(role)
      console.log(user);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  getRestaurant: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  updateRestaurant: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('no record found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  deleteRestaurant: asyncHandler(async (req, res, next) => {
    try {
      const deal = await DealModel.find().where({ restaurantId: req.query.restaurantId });
      if (deal.length > 0) {
        res.json({
          response: "first you remove the deal against the restaurant then remove the restaurant"
        })
      }
      else {
        await User.findByIdAndDelete(req.query.restaurantId);
        return res.json({
          response: "restaurant deleted successfully",
          success: true
        })
      }
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),

  // ---Deals--- //

  createDeals: asyncHandler (async (req, res, next) => {
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

  getDeal: asyncHandler (async (req, res, next) => {
    try {
    console.log(req.params.id);
    // const deal = await DealModel.find().where({restaurantId: req.params.id});
    const deal = await DealModel.findById(req.params.id);
    console.log(deal);
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

  getRestaurantsDropdown: asyncHandler(async (req, res, next) => {
    try {
      const user = await User.find({role:"restaurantManager"}).select('name')
      console.log(user);
      if (user) {
        return res.status(200).json({
          success: true,
          data: user
        });
      } else {return next(new ErrorResponse('record not found', 404))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('server error', 500))
    }
  }),
}
