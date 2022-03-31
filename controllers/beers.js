const fetch = require('node-fetch');
const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const User = require('../models/user')

module.exports = {
    index,
    show,
    new: newBeer,
    create
}

function index(req, res) {
    Beer.find({}, function (err, beers) {
        res.render('beers/index', { beers })
    })

}

function show(req, res) {
    Beer.findById(req.params.id).populate('breweries').exec(function (err, beer) {
        Brewery.find({ _id: { $in: beer.breweries } }, function (err, breweries) {
            console.log(breweries)
            res.render('beers/show', { beer, breweries })
        })
    })
}

function newBeer(req, res) {
    Brewery.find({}, function (err, breweries) {
        res.render('beers/new', { breweries })
    })
}

function create(req, res) {
    console.log(req.body)
    const beer = new Beer(req.body);
    beer.save(function (err) {
        if (err) {
            console.log(err)
            return res.redirect('/beers/new');
        }
        res.redirect('/beers');
    });
}
