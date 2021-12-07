const jwt = require("jsonwebtoken");
const Register = require("../models/Register.model");

const auth = async (req, res, next) => {
    try {
        // Get auth Header Value
        const bearerHeader = req.headers['authorization'];

        // check if bearer is undefined
        if (bearerHeader) {
            // split at the space
            const bearer = bearerHeader.split(' ');

            // Get token from an array
            const bearerToken = bearer[1];

            // set the token
            req.token = bearerToken;

            // verify the user
            const verifyUser = jwt.verify(req.token, "mynameisnomanahmedawanpakistanzindabadtumjeetoyahaarohumeintumsepyaarhai");
            console.log('verify user', verifyUser);

            const user = await Register.findOne({ _id: verifyUser._id });
            // console.log(user);
            console.log(user);
            next();
        } else {
            res.sendStatus(403);
        }
        
    } catch (err) {
        res.status(404).send(err);
    }
}

module.exports = auth;