define({ "api": [
  {
    "type": "get",
    "url": "/api/distance",
    "title": "Get the distance between 2 locations",
    "version": "1.0.0",
    "group": "Calculate",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat1",
            "description": "<p>1st lattitude as query parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "long1",
            "description": "<p>1st Longitude as query parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lat2",
            "description": "<p>2nd lattitude as query parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "long2",
            "description": "<p>2nd Longitude as query parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Distance calculated\",\n           \"status\": 200,\n           \"data\": {\n               \"distance\": \"Number\"\n           }\n       }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/vehicle.js",
    "groupTitle": "Calculate",
    "name": "GetApiDistance"
  },
  {
    "type": "get",
    "url": "/api/vehicle/all",
    "title": "Get all vehicle details",
    "version": "1.0.0",
    "group": "Vehicle",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Vehicle data listed successfully\",\n           \"status\": 200,\n           \"data\": [{\n                       \"_id\": \"String\",\n                       \"VehicleNo\": \"String\",\n                       \"Imei\": \"Number\",\n                       \"Location\": \"String\",\n                       \"Date\": \"Date\",\n                       \"Tempr\": \"Number\",\n                       \"Ignition\": \"Number\",\n                       \"Speed\": \"Number\",\n                       \"Angle\": \"Number\",\n                       \"Lat\": \"String\",\n                       \"Long\": \"String\"\n                   }]\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/vehicle.js",
    "groupTitle": "Vehicle",
    "name": "GetApiVehicleAll"
  },
  {
    "type": "get",
    "url": "/api/vehicle/:id",
    "title": "Get the details of particular vehicle",
    "version": "1.0.0",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the vehicle as parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n           \"error\": false,\n           \"message\": \"Requested vehicle data listed successfully\",\n           \"status\": 200,\n           \"data\": {\n                       \"_id\": \"String\",\n                       \"VehicleNo\": \"String\",\n                       \"Imei\": \"Number\",\n                       \"Location\": \"String\",\n                       \"Date\": \"Date\",\n                       \"Tempr\": \"Number\",\n                       \"Ignition\": \"Number\",\n                       \"Speed\": \"Number\",\n                       \"Angle\": \"Number\",\n                       \"Lat\": \"String\",\n                       \"Long\": \"String\"\n                   }\n       }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 404/500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/vehicle.js",
    "groupTitle": "Vehicle",
    "name": "GetApiVehicleId"
  }
] });
