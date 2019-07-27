const VehicleModel = require('../models/vehicleModel');
const logger = require('./loggerLib');


exports.fetchVehicle = () => {
    let url = 'http://vehicletrack.biz/api/companyvehiclelatestinfo?token=123456';
    
    let checkVehicleData = () => {
        return new Promise((resolve, reject) => {
            VehicleModel.find()
            .then(result => {
                if(!result) {
                    resolve("No data found");
                }
                reject("Data already exists");
            })
            .catch(err => {
                logger.error(`${err}`, "VehicleController: fetchVehicle(): checkVehicleData()", "high");
                reject();
            })
        });
    }
    
    let fetchVehicleData = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(data => {
                vehicleData = data.Vehicle;
                vehicleData.forEach((vehicle) => {
                    const newVehicle = new VehicleModel({
                        vehicleNo: vehicle.VehicleNo,
                        imei: vehicle.Imei,
                        localtion: vehicle.Location,
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
                        logger.info();
                        resolve("Data inserted successfully");
                    })
                    .catch(err => {
                        logger.error(`${err}`, `VehicleController: fetchVehicle(): fetchVehicleData(): for ${vehicle.VehicleNo}`, "high");
                        reject("Data insertion error");
                    });
                });
            });
        });
        
    } 
    
    
    async function execute() {
        try {
            let data = await checkVehicleData();
            let insertData = await fetchVehicleData(url);
                        
        } catch (error) {
            logger.error(`${error}`, "VehicleController: fetchVehicle(): execute()", "med");
        }
    }
    
    execute();
}