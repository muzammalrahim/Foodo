const express = require("express");
const router = express.Router();

const {
    saveRegister
} = require("../controllers/register.controller");

router.post("/save-register", saveRegister);

module.exports = router;