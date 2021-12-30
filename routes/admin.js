const express = require('express');
const adminController = require('./../controllers/admin');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router({ mergeParams: true });
router.use(protect);
router.use(authorize('admin'));

router.post("/createUser", adminController.createUser);
router.put("/updateUser/:id", adminController.updateUser);
router.get("/getUsers", adminController.getUsers);
router.get("/getUser/:id", adminController.getUser);
router.delete("/deleteUser/:id", adminController.deleteUser);

router.post("/createSubAdmin", adminController.createSubAdmin);
router.get("/getSubAdmins", adminController.getSubAdmins);
router.get("/getSubAdmin/:id", adminController.getSubAdmin);
router.put("/updateSubAdmin/:id", adminController.updateSubAdmin);
router.delete("/deleteSubAdmin/:id", adminController.deleteSubAdmin);

router.post("/createRestaurant", adminController.createRestaurant);
router.get("/getRestaurants", adminController.getRestaurants);
router.get("/getRestaurant/:id", adminController.getRestaurant);
router.put("/updateRestaurant/:id", adminController.updateRestaurant);
router.delete("/deleteRestaurant", adminController.deleteRestaurant);
router.get("/getRestaurantsDropdown", adminController.getRestaurantsDropdown);

router.post("/createDeals", adminController.createDeals);
router.get("/getDeal/:id", adminController.getDeal);
router.get("/getDeals", adminController.getDeals);
router.delete("/deleteDeal/:id", adminController.deleteDeal);
router.put("/updateDeal/:id", adminController.updateDeal);

module.exports = router;
