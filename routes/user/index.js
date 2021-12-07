const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");

router.post("/login", userController.login);
router.post("/signup", userController.signup);
//---//
router.post("/save-user", userController.saveUser);
router.get("/get-user/:id", userController.getUserById);
router.get("/get-user", userController.getUser);
router.put("/update-user/:id", userController.updateUser);
router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;