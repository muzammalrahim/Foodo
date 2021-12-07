const CheckRestaurantRegister = require("../models/RestaurantRegister");
const bcrypt = require("bcryptjs");
const checkRestaurantLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("password", password);
    const restaurantEmail = await CheckRestaurantRegister.findOne({ email });
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
};

module.exports = {
  checkRestaurantLogin,
};
