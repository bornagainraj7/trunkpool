const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let VehicleModel = new Schema({
    vehicleNo: {
        type: String,
        required: true
    },
    imei: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    tempr: Number,
    ignition: Number,
    speed: Number,
    angle: Number,
    lat: {
        type: String,
        required: true
    },
    long: {
        type: String,
        required: true
    }
     
});

module.exports = mongoose.model("Vehicle", VehicleModel);