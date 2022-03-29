const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brewerySchema = new Schema({
    id: String,
    active: { type: Boolean, default: true }
})

const beerSchema = new Schema({
    name: String,
    style: { type: String, enum: ['Pilsner', 'Pale Ale', 'Stout', 'Porter', 'IPA'] },
    origin: String,
    abv: Number,
    breweries: [brewerySchema]
})

module.exports = mongoose.model('Beer', beerSchema)