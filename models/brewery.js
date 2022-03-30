const mongoose = require('mongoose')
const Schema = mongoose.Schema

const brewerySchema = new Schema({
    name: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true }
})

module.exports = mongoose.model('Brewery', brewerySchema)