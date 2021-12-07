const express = require("express");
const router = express.Router();

const {
    saveDeal,
    getDealById,
    getDeal,
    updateDeal,
    deleteDeal
} = require("../../controllers/deal.controller");

router.post("/save-deal", saveDeal);
router.get("/get-deal/:id", getDealById);
router.get("/get-deal", getDeal);
router.put("/update-deal/:id", updateDeal);
router.delete("/delete-deal/:id", deleteDeal);

module.exports = router;