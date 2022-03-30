const express = require('express')
const router = express.Router()
const reviewsCtrl = require('../controllers/reviews')

router.delete('/reviews/:id', reviewsCtrl.delete)
router.post('/beers/:id/reviews', reviewsCtrl.create)

module.exports = router