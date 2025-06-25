const express = require('express');
const router = express.Router();
const quotationController = require("../Controller/quotationController");

router.post('/create', quotationController.createQuotation);
router.get('/getAll', quotationController.getAllQuotations);
router.get('/get/:id', quotationController.getQuotationById);

module.exports = router;
