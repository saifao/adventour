const fetch = require('node-fetch')
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')

module.exports = { create, refresh }

function create(req, res) {
    Beer.findById(req.params.id, function (err, beer) {
        beer.breweries.push(req.body.breweryId)
        beer.save()
        res.redirect(`/beers/${beer._id}`)
    })
}

async function refresh(req, res) {
    await Brewery.deleteMany({})
    fetch("https://api.openbrewerydb.org/breweries")
        .then(arrBreweries => arrBreweries.json())
        .then(arrBreweries => arrBreweries.forEach(function (data) {
            const brewery = new Brewery(data)
            brewery.save();
        }))
        .then(res.redirect('/beers/new'))
}