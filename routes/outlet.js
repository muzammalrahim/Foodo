const express = require("express");
const router = express.Router();
const { protect } = require('../middleware/auth');
const outletController = require("../controllers/outlet")
//---//
router.post("/save-restaurant", protect, outletController.createRestaurant);
router.get("/get-restaurant/:id", outletController.getRestaurants);
router.get("/get-restaurants", outletController.getRestaurant);
router.delete("/remove-restaurant/:id", outletController.deleteRestaurant);
router.put("/update-restaurant/:id", outletController.updateRestaurant);
//---//
router.post("/save-deal", outletController.createDeal);
router.get("/get-deal/:id", outletController.getDeals);
router.get("/get-deal", outletController.getDeal);
router.put("/update-deal/:id", outletController.updateDeal);
router.delete("/delete-deal/:id", outletController.deleteDeal);

module.exports = router;