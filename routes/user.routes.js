const express = require("express");
const router = express.Router();

const {
  saveUser,
  getUserById,
  getUser,
  updateUser,
  deleteUser,
  grantAccess,
  allowIfLoggedin,
} = require("../controllers/user.controller");

router.post("/save-user", saveUser);
router.get("/get-user/:id", allowIfLoggedin, getUserById);
router.get("/get-user", allowIfLoggedin, grantAccess('readAny', 'user'), getUser);
router.put("/update-user/:id", allowIfLoggedin, grantAccess('updateAny', 'user'), updateUser);
router.delete("/delete-user/:id", allowIfLoggedin, grantAccess('deleteAny', 'user'), deleteUser);
module.exports = router;