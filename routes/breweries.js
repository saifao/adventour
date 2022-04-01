const express = require('express')
const router = express.Router()
const breweriesCtrl = require('../controllers/breweries')

router.post('/beers/:id/breweries', breweriesCtrl.create)

module.exports = router