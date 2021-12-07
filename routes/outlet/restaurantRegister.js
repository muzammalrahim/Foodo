const express = require("express");

const router = express.Router();

const {
    saveRestaurantRegister,
} = require("../../controllers/RestaurantRegister");

router.post("/save-registerRestaurant", saveRestaurantRegister);

module.exports = router;