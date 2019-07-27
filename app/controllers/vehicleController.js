const VehicleModel = require('../models/vehicleModel');
const logger = require('../libs/loggerLib');
const response = require('../libs/responseLib');

exports.getAllVehicles = (req, res) => {
    VehicleModel.find().select('-__v').lean()
    .then(result => {
        if(!result) {
            let apiResponse = response.generate(true, "No vehicle data found", 404, null);
            res.status(apiResponse.status).send(apiResponse);
        }
        
        let apiResponse = response.generate(false, "Vehicle data listed successfully", 200, result);
        res.status(apiResponse.status).send(apiResponse);
    })
    .catch(err => {
        logger.error(`${err}`, "VehicleController: getAllVehicles()", "high");
        let apiResponse = response.generate(true, "Some error occurred, please try again later", 500, null);
        res.status(apiResponse.status).send(apiResponse);
    })
}


exports.getVehicleById = (req, res) => {
    const vehicleId = req.params.id;
    VehicleModel.findById(vehicleId).select('-__v').lean()
    .then(result => {
        if (!result) {
            let apiResponse = response.generate(true, "No vehicle data found for that id", 404, null);
            res.status(apiResponse.status).send(apiResponse);
        }
        let apiResponse = response.generate(false, "Requested vehicle data listed successfully", 200, result);
        res.status(apiResponse.status).send(apiResponse);
    })
    .catch(err => {
        logger.error(`${err}`, "VehicleController: getAllVehicles()", "high");
        let apiResponse = response.generate(true, "Some error occurred, please try again later", 500, null);
        res.status(apiResponse.status).send(apiResponse);
    })
}


exports.findDistance = (req, res) => {
    let lat1 = req.query.lat1;
    let lat2 = req.query.lat2;
    let long1 = req.query.long1;
    let long2 = req.query.long2;
    
    let deg2rad = (deg) => deg * (Math.PI / 180);
    
    
    let R = 6371; // Radius of the earth in km
    let dLat = deg2rad(lat2 - lat1);
    let dLong = deg2rad(long2 - long1);
    let a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    
    let apiResponse = response.generate(false, "Distance calculated", 200, d);
    res.status(apiResponse.status).send(apiResponse);
    
}