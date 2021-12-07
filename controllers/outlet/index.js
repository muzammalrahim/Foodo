const outletModel = require("../../models/outlet");
const bcrypt = require("bcryptjs");
module.exports = {
  saveRestaurant: async (req, res) => {
    try {
  
      await new outletModel(req.body).save();
  
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
  },
  
  getRestaurantById: async (req, res) => {
    try {
      const { id } = req.params;
  
      const restaurant = await outletModel.findById(id);
  
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
  },
  getRestaurants: async (req, res) => {
    try {
      const restaurants = await outletModel.find();
  
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
  },
  
  deleteRestaurant: async (req, res) => {
    try {
      const { id } = req.params;
  
      await outletModel.findByIdAndRemove(id);
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
  },
  
  updateRestaurant: async (req, res) => {
    try {
      const { name ,address,phone,image } = req.body;
      const { id } = req.params;
  
      const updatedRestaurant = await outletModel.findByIdAndUpdate(
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
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("password", password);
      const restaurantEmail = await outletModel.findOne({ email });
      console.log(restaurantEmail.password);
  
      const isMatch = await bcrypt.compare(password, restaurantEmail.password);
      console.log(isMatch);
  
      const token = await restaurantEmail.generateAuthToken();
      console.log(`the token part ${token}`);
  
      if (isMatch) {
        res.json({
          response: "login successfully",
          token,
        });
      } else {
        res.json({
          response: "invalid password",
        });
      }
    } catch (err) {
      return res.status(404).json({
        response: "something went wrong",
        err,
        success: false,
      });
    }
  },
  signup: async (req, res) => {
    try {
        const { name, email, password, confirmPassword, address, phoneNo, image } = req.body;
        if (password === confirmPassword) {
          const registerRestaurant = await new outletModel({
            name,
            email,
            password,
            confirmPassword,
            address,
            phoneNo,
            image,
          });
        
          const token = await registerRestaurant.generateAuthToken();
        //   console.log(`the token part ${token}`)
          const registered = await registerRestaurant.save();
        //   console.log(`the page part ${registered}`)
          return res.status(201).json({
              response: "user register successfully",
              success: true
          })
        }
        else {
            res.json({
                response: "password not matching",
                success: false
            })
        }
    } catch (err) {
        return res.status(404).json({
            response: "something went wrong",
            err,
            success: false
        })
    }
  },
  saveDeal: async (req, res) => {
      try {
          
          const deal = await outletModel(req.body).save();
          return res.status(201).json({
              data: deal,
              response: "deal added successfully",
              success: true
          })
      } catch (err) {
          return res.status(404).json({
              response: "something went wrong",
              err,
              success: false
          })
      }
  },

  getDealById: async (req, res) => {
      try {
      const { id } = req.params;
      const deal = await outletModel.findById(id);

      return res.status(200).json({
          data: deal,
          success: true,
      });
      } catch (err) {
      return res.status(404).json({
          response: "something went wrong",
          err,
          success: false,
      });
      }
  },

  getDeal: async (req, res) => {
      try {
          
      const deal = await outletModel.find().populate("dealData.restaurantId");
      
      return res.status(200).json({
          data: deal,
          success: true,
      });
      } catch (err) {
      return res.status(404).json({
          response: "something went wrong",
          err,
          success: false,
      });
      }
  },

  updateDeal: async (req, res) => {
      try {      
          const { id } = req.params;

          const updateDeal = await outletModel.findByIdAndUpdate(id, req.body,
          {
              new: true
          }
          );

      return res.status(200).json({
          data: updateDeal,
          response: "deal updated successfully",
          success: true,
      });
      } catch (err) {
      return res.status(404).json({
          response: "something went wrong",
          err,
          success: false,
      });
      }
  },

  deleteDeal: async (req, res) => {
      try {
      const { id } = req.params;
      await outletModel.findByIdAndRemove(id);

      return res.status(200).json({
          data: null,
          response: "deleted successfully",
          success: true,
      });
      } catch (err) {
      return res.status(505).json({
          response: "server error",
          err,
          success: false,
      });
      }
  },
}