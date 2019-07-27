const express = require("express");
const app = express();
const mongoose = require("mongoose");
const errorController = require('./app/controllers/errorController');
const vehicleRoutes = require('./app/routes/vehicle');
const fetchData = require('./app/libs/fetchLib');

const MONGODB_URI = "mongodb://127.0.0.1:27017/TrunkpoolDB";
const port = process.env.PORT || 3000;


// Set Headers for CORS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    next();
});


// Route logger
app.use((req, res, next) => {
    console.log(req.method + " " + req.originalUrl);
    next();
})

// Routes
app.use('/api', vehicleRoutes);

// global 404
app.use(errorController.get404);


// Listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    mongoose.connect(
        MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("Database connected successfully");
        fetchData.fetchVehicle();
    })
    .catch(err => console.log(err));
});
