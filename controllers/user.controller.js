const UserModel = require("../models/User.model");
const roles = require("../middleware/role");
const grantAccess = (action, resource) => {
  return async (req, res, next) => {
    try {
      const permission = roles.can(req.user.role)[action](resource);
      if (!permission.granted) {
        return res.status(401).json({
          error: "You don't have enough permission to perform this action",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};

const allowIfLoggedin = async (req, res, next) => {
  try {
      const user = res.locals.loggedInUser;
      console.log(user);
    if (!user)
      return res.status(401).json({
        error: "You need to be logged in to access this route",
      });
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
const saveUser = async (req, res) => {
    try {

        await new UserModel(req.body).save();

        return res.status(201).json({
            response: "user added successfully",
            success: true
        })
    } catch (err) {
        return res.status(404).json({
            response: "something went wrong",
            err,
            success: false
        })
    }
}

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await UserModel.findById(id);
        return res.status(200).json({
            data: user,
            success: true
        })
    } catch (err) {
        return res.status(404).json({
            response: "something went wrong",
            err,
            success: false
        })
    }
}

const getUser = async (req, res) => {
    try {
      
    const user = await UserModel.find();
    return res.status(200).json({
      data: user,
      success: true,
    });
  } catch (err) {
    return res.status(404).json({
      response: "something went wrong",
      err,
      success: false,
    });
  }
};

const updateUser = async (req, res) => {
    try {

        const { id } = req.params;

        const updateUser = await UserModel.findByIdAndUpdate(id, req.body,
            {
                new: true
            }
        );
        return res.status(200).json({
            data: updateUser,
            response: "user updated successfully",
            success: true,
        });
    } catch (err) {
        return res.status(404).json({
        response: "something went wrong",
        err,
        success: false,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        
        await UserModel.findByIdAndRemove(id);
        return res.status(200).json({
            data: null,
            response: "user profile deleted successfully",
            success: true
        })

    } catch (err) {
        return res.status(505).json({
            response: "server error",
            err,
            success: false
        })
    }
}

module.exports = {
  saveUser,
  getUserById,
  getUser,
  updateUser,
  deleteUser,
  grantAccess,
  allowIfLoggedin,
};