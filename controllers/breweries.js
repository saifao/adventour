const Beer = require('../models/beer')

module.exports = { create }

function create(req, res) {
    Beer.findById(req.params.id, function (err, beer) {
        beer.breweries.push(req.body.breweryId)
        beer.save()
        res.redirect(`/beers/${beer._id}`)
    })
}