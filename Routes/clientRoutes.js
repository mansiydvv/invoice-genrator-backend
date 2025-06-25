// routes/clientRoutes.js
const express = require('express');
const router = express.Router();
const clientController = require('../Controller/clientController');

router.post('/create', clientController.createClient);
router.get('/getAll', clientController.getClients);
router.get('/get/:id', clientController.getClient);
router.put('/update/:id', clientController.updateClient);
router.delete('/delete/:id', clientController.deleteClient);

module.exports = router;
