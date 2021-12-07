const express = require("express");
const router = express.Router();

const {
    saveUser,
    getUserById,
    getUser,
    updateUser,
    deleteUser
} = require("../controllers/user.controller");

router.post("/save-user", saveUser);
router.get("/get-user/:id", getUserById);
router.get("/get-user", getUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);
module.exports = router;