const express = require("express");
const commonController = require("./../controllers/auth");
const authChecker = require("./../middleware/auth_checker");
//--//
const router = express.Router();
const { protect } = require('../middleware/auth');
//--//

router.post("/signup", commonController.signup);
router.post("/login", commonController.login);
router.get('/logout', commonController.logout);
router.get('/getProfile', protect, commonController.getMe);
router.put('/updateProfile', protect, commonController.updateProfile)

//--//
module.exports = router;