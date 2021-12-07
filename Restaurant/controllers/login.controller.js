const CheckRegister = require("../models/Register.model");
const bcrypt = require("bcryptjs");
const checkLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("password", password);
        const userEmail = await CheckRegister.findOne({ email });
        console.log(userEmail.password)

        const isMatch = await bcrypt.compare(password, userEmail.password);
        console.log(isMatch);

        const token = await userEmail.generateAuthToken();
        console.log(`the token part ${token}`);

        if (isMatch) {
            res.json({
                response: "login successfully",
                token
            })
        } else {
            res.json({
              response: "invalid password",
            });
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
    checkLogin
};

