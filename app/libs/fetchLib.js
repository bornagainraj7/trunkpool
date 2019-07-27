const VehicleModel = require('../models/vehicleModel');
const logger = require('./loggerLib');
const axios = require('axios');


exports.fetchVehicle = () => {
    let url = 'http://vehicletrack.biz/api/companyvehiclelatestinfo?token=123456';
    
    let checkVehicleData = () => {
        return new Promise((resolve, reject) => {
            VehicleModel.find()
            .then(result => {
                if(!result || result.length <= 0) {
                    resolve("No data found");
                }
                reject("Data already exists");
            })
            .catch(err => {
                logger.error(`${err}`, "fetchLib: fetchVehicle(): checkVehicleData()", "high");
                reject();
            })
        });
    }
    
    let fetchVehicleData = (url) => {
        return new Promise((resolve, reject) => {
            axios.get(url)
            .then(res => res.data)
            .then(data => {
                let vehicleData = data.Vehicle;
                
                if(vehicleData.length > 0) {
                    vehicleData.forEach((vehicle) => {
                        const newVehicle = new VehicleModel({
                            vehicleNo: vehicle.VehicleNo,
                            imei: vehicle.Imei,
                            location: vehicle.Location,
                            date: new Date(vehicle.Date),
                            tempr: vehicle.Tempr,
                            ignition: vehicle.Ignition,
                            speed: vehicle.Speed,
                            angle: vehicle.Angle,
                            lat: vehicle.Lat,
                            long: vehicle.Long
                        });

                        newVehicle.save()
                        .then(res => {
                            resolve("Data inserted successfully");
                        })
                        .catch(err => {
                            logger.error(`${err}`, `fetchLib: fetchVehicle(): fetchVehicleData(): for ${vehicle.VehicleNo}`, "high");
                            reject("Data insertion error");
                        });
                    });
                } else {
                    logger.error('No data retrivied from the API', "fetchLib: fetchVehicle(): execute()", "med");
                }
                
            });
        });
        
    } 
    
    
    async function execute() {
        try {
            let data = await checkVehicleData();
            let insertData = await fetchVehicleData(url);
                        
        } catch (error) {
            logger.error(`${error}`, "fetchLib: fetchVehicle(): execute()", "low");
        }
    }
    
    execute();
}