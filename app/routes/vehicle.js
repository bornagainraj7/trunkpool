const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');


router.get('/all', vehicleController.getAllVehicles);

router.get('/vehicle/:id', vehicleController.getVehicleById);

router.get('/distance', vehicleController.findDistance);

module.exports = router;