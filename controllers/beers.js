const Beer = require('../models/beer')

module.exports = {
    index,
    new: newBeer,
    create
}

function index(req, res) {
    Beer.find({}, function (err, beers) {
        res.render('beers/index', { beers })
    })

}
function newBeer(req, res) {
    res.render('beers/new')
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