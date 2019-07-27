const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');


router.get('/vehicle/all', vehicleController.getAllVehicles);
    /**
     * @api {get} /api/vehicle/all Get all vehicle details
     * @apiVersion 1.0.0
     * @apiGroup Vehicle
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
            "error": false,
            "message": "Vehicle data listed successfully",
            "status": 200,
            "data": [{
                        "_id": "String",
                        "VehicleNo": "String",
                        "Imei": "Number",
                        "Location": "String",
                        "Date": "Date",
                        "Tempr": "Number",
                        "Ignition": "Number",
                        "Speed": "Number",
                        "Angle": "Number",
                        "Lat": "String",
                        "Long": "String"
                    }]
        }
    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 404/500,
	    "data": null
	   }
    */


router.get('/vehicle/:id', vehicleController.getVehicleById);
    /**
     * @api {get} /api/vehicle/:id  Get the details of particular vehicle
     * @apiVersion 1.0.0
     * @apiGroup Vehicle
     * @apiParam {String} id id of the vehicle as parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
            "error": false,
            "message": "Requested vehicle data listed successfully",
            "status": 200,
            "data": {
                        "_id": "String",
                        "VehicleNo": "String",
                        "Imei": "Number",
                        "Location": "String",
                        "Date": "Date",
                        "Tempr": "Number",
                        "Ignition": "Number",
                        "Speed": "Number",
                        "Angle": "Number",
                        "Lat": "String",
                        "Long": "String"
                    }
        }
    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 404/500,
	    "data": null
	   }
    */


router.get('/distance', vehicleController.findDistance);
    /**
     * @api {get} /api/distance Get all vehicle details
     * @apiVersion 1.0.0
     * @apiGroup Calculate
     * @apiParam {Number} lat1 1st lattitude as parameter
     * @apiParam {Number} long1 1st Longitude as parameter
     * @apiParam {Number} lat2 2nd lattitude as parameter
     * @apiParam {Number} long2 2nd Longitude as parameter
     *
     *  @apiSuccessExample {json} Success-Response:
     *  {
            "error": false,
            "message": "Distance calculated",
            "status": 200,
            "data": {
                "distance": "Number"
            }
        }
    */
   

module.exports = router;