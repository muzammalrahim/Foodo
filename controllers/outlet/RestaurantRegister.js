const RestaurantRegisterModel = require("../../models/RestaurantRegister");

const saveRestaurantRegister = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, address, phoneNo, image } = req.body;
        if (password === confirmPassword) {
          const registerRestaurant = await new RestaurantRegisterModel({
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
}

module.exports = {
  saveRestaurantRegister,
};