const express = require('express')
const router = express.Router()
const breweriesCtrl = require('../controllers/breweries')

router.post('/beers/:id/breweries', breweriesCtrl.create)
router.get('/breweries', breweriesCtrl.refresh)

module.exports = router