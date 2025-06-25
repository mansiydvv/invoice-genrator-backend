const express = require('express');
const router = express.Router();
const itemController = require("../Controller/itemController");

router.post('/create',itemController.createItem);
router.get('/getAll', itemController.getItems);
router.get('/get/:id', itemController.getItem);
router.put('/update/:id', itemController.updateItem);
router.delete('/delete/:id', itemController.deleteItem);

module.exports = router;
