// THIS WILL REFRESH THE BREWERING COLLECTION IN YOUR DATABASE

require('dotenv').config();
require('./config/database');
const fetch = require('node-fetch')
const Brewery = require('./models/brewery')


fetch("https://api.openbrewerydb.org/breweries")
    .then(arrBreweries => arrBreweries.json())
    .then(arrBreweries => arrBreweries.forEach(function (data) {
        const brewery = new Brewery(data)
        brewery.save();
        return;
    }))

