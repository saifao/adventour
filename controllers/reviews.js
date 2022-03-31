const Beer = require('../models/beer')

module.exports = { create, delete: deleteReview, edit, update }

function create(req, res) {
    Beer.findById(req.params.id, function (err, beer) {
        req.body.name = req.user.name
        req.body.user = req.user._id //user is the user-schema-object-id stored in usersSchema and referred to in reviewsSchema
        beer.reviews.push(req.body)
        beer.save()
        res.redirect(`/beers/${beer._id}`)
    })
}

function deleteReview(req, res) {
    Beer.findOne({ 'reviews._id': req.params.id })
        .then(function (beer) {
            const review = beer.reviews.id(req.params.id)
            if (!review.user.equals(req.user._id)) return res.redirect(`/beers/${beer._id}`)
            review.remove()
            beer.save()
            res.redirect(`/beers/${beer._id}`)
        })

}

function edit(req, res) {
    Beer.findOne({ 'reviews._id': req.params.id }, function (err, beer) {
        const review = beer.reviews.id(req.params.id)
        res.render('reviews/edit', { review })
    })
}

function update(req, res) {
    Beer.findOne({ 'reviews._id': req.params.id }, function (err, beer) {
        const review = beer.reviews.id(req.params.id)
        if (!review.user.equals(req.user._id)) return res.redirect(`/beers/${beer._id}`)
        review.content = req.body.reviewUpdate
        review.rating = req.body.ratingUpdate
        beer.save()
        res.redirect(`/beers/${beer._id}`)
    })
}