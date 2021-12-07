const RegisterModel = require("../models/Register.model");

const saveRegister = async (req, res) => {
    try {
        const { firstName, lastName, password, confirmPassword, email, address, phoneNo, role } = req.body;
        if (password === confirmPassword) {
          const registerUser = await new RegisterModel({
            firstName,
            lastName,
            password,
            confirmPassword,
            email,
            address,
            phoneNo,
            role
          })
        
          const token = await registerUser.generateAuthToken();
        //   console.log(`the token part ${token}`)
          const registered = await registerUser.save();
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
    saveRegister
}