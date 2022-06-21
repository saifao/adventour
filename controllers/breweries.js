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
    const brewList = await fetch("https://api.openbrewerydb.org/breweries")
    const brewListParsed = await brewList.json()
    brewListParsed.forEach((data) => {
        const brewery = new Brewery(data)
        brewery.save();
    })
    res.redirect('/beers/new')
}