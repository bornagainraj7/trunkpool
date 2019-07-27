# Trunkpool API

This project was made to save data after fetching it from an API and save it in mongoDB and then perform some operation on in. It also has a API to calculate a distance between 2 locations based on their lattitude and longitude.

## API endpoints

### Find All
`http://localhost:3000/api/vehicle/all`

This endpoint will fetch all the vehicle and their details in the database;


### Find by id
`http://localhost:3000/api/vehicle/:id`

This endpoint will fetch all the details of a particular vehicle and it requires a parameter of id as param.


### Find the distance
`http://localhost:3000/api/distance`

This endpoint will calculate and return the distance between two locations based n their lattitude and longitude.

*Please refer to the API docs in the apidocs folder for more details.