const express = require('express');
const subAdminController = require('./../controllers/subAdmin');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });
router.use(protect);
router.use(authorize('subadmin'));

router.post("/createUser", subAdminController.createUser);
router.put("/updateUser/:id", subAdminController.updateUser);
router.get("/getUsers", subAdminController.getUsers);
router.get("/getUser/:id", subAdminController.getUser);
router.delete("/deleteUser/:id", subAdminController.deleteUser);

router.post("/createRestaurant", subAdminController.createRestaurant);
router.get("/getRestaurants", subAdminController.getRestaurants);
router.get("/getRestaurant/:id", subAdminController.getRestaurant);
router.put("/updateRestaurant/:id", subAdminController.updateRestaurant);
router.delete("/deleteRestaurant", subAdminController.deleteRestaurant);
router.get("/getRestaurantsDropdown", subAdminController.getRestaurantsDropdown);

router.post("/createDeals", subAdminController.createDeals);
router.get("/getDeal/:id", subAdminController.getDeal);
router.get("/getDeals", subAdminController.getDeals);
router.delete("/deleteDeal/:id", subAdminController.deleteDeal);
router.put("/updateDeal/:id", subAdminController.updateDeal);

module.exports = router;