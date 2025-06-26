const express = require("express");
const router = express.Router();
const quotationController = require("../controller/quotationController");

// Create new quotation
router.post("/create", quotationController.createQuotation);

// Get client details by ID
router.get("/client/:clientId", quotationController.getClientDetails);

module.exports = router;
