const express = require("express");
const router = express.Router();

const {
    checkRestaurantLogin
} = require("../../controllers/restaurantLogin");

router.post("/login-restaurant", checkRestaurantLogin);

module.exports = router;