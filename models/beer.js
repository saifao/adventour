const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const brewerySchema = new Schema({
//     id: String,
//     active: { type: Boolean, default: true }
// })

const reviewSchema = new Schema({
    content: String,
    rating: { type: String, min: 1, max: 5 },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const beerSchema = new Schema({
    name: String,
    style: { type: String, enum: ['Pilsner', 'Pale Ale', 'Stout', 'Porter', 'IPA'] },
    origin: String,
    abv: Number,
    reviews: [reviewSchema],
    breweries: [{ type: Schema.Types.ObjectId, ref: 'Brewery' }]
})

module.exports = mongoose.model('Beer', beerSchema)