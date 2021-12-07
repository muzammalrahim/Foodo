const express = require("express");
const router = express.Router();
const outletController = require("../../controllers/outlet")

router.post("/login", outletController.login);
router.post("/signup", outletController.signup);
//---//
router.post("/save-restaurant", outletController.saveRestaurant);
router.get("/get-restaurant/:id", outletController.getRestaurantById);
router.get("/restaurants", outletController.getRestaurants);
router.delete("/remove-restaurant/:id", outletController.deleteRestaurant);
router.put("/update-restaurant/:id", outletController.updateRestaurant);
//---//
router.post("/save-deal", outletController.saveDeal);
router.get("/get-deal/:id", outletController.getDealById);
router.get("/get-deal", outletController.getDeal);
router.put("/update-deal/:id", outletController.updateDeal);
router.delete("/delete-deal/:id", outletController.deleteDeal);

module.exports = router;