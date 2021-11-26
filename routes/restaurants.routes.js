const express = require("express");
const router = express.Router();

const {
  saveRestaurant,
  getRestaurantById,
  getRestaurants,
  deleteRestaurant,
  updateRestaurant,
} = require("../controllers/partner");

router.post("/save-restaurant", saveRestaurant);
router.get("/get-restaurant/:id", getRestaurantById);
router.get("/restaurants", getRestaurants);
router.delete("/remove-restaurant/:id", deleteRestaurant);
router.put("/update-restaurant/:id", updateRestaurant);

module.exports = router;
