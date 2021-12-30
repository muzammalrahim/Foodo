const UserModel = require("./../models/User");
const queryString = require("query-string");
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('./../utils/ErrorResponse');
module.exports = {
  signup: async (req, res, next) => {
    try {
      const { email } = req.body;
      const isUser = await UserModel.findOne({ email })
      if (isUser) {return next(new ErrorResponse('Already Exist', 406))}
      
      const user = await UserModel.create(req.body)
      console.log(user);
      if(user){
        return res.status(201).json({
          response: "register successfully",
          success: true,
          data: user
        })
      }else {return next(new ErrorResponse('db_error', 422))}
    } catch (err) {
      console.log(err);
      return next(new ErrorResponse('Server Error', 500))
    }
  },
  
  login: async (req, res, next) => {
      try {
        const { email, password } = req.body;
        if (!email || !password) {return next(new ErrorResponse('Please provide an email and password', 400))}
        const user = await UserModel.findOne({ email }).select('+password');
        if (!user) {return next(new ErrorResponse('Invalid credentials', 401));}
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {return next(new ErrorResponse('Invalid credentials', 401));}
        sendTokenResponse(user, 200, res);
      } catch (err) {
        console.log(err);
        return next(new ErrorResponse('Server Error', 500));
      }
  },

  logout: async (req, res, next) => {
    res.cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      data: {},
    });
  },

  getMe: async (req, res, next) => {
    // user is already available in req due to the protect middleware
    const user = req.user;

    res.status(200).json({
      success: true,
      data: user,
    });
  },

  updateProfile: asyncHandler(async (req, res, next) => {
    try {
      const user = await UserModel.findByIdAndUpdate(req.user, req.body, {
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

}

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  const token = user.getSignedJwtToken();
  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000,
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token,
    user: {email: user.email, role: user.role, id: user.id}
  });
}