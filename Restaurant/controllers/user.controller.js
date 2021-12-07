const UserModel = require("../models/User.model");

const saveUser = async (req, res) => {
    try {
        const { name, email, address, phoneNo, image } = req.body

        await new UserModel({
          name,
          email,
          address,
          phoneNo,
          image,
        }).save();

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
        const { name, email, address, phoneNo, image } = req.body;

        const { id } = req.params;

        const updateUser = await UserModel.findByIdAndUpdate(
            id,
            {
                name,
                email,
                address,
                phoneNo,
                image,
            },
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
  deleteUser
};