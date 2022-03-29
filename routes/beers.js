const express = require('express')
const router = express.Router()
const beersCtrl = require('../controllers/beers')

module.exports = router

router.get('/', beersCtrl.index)
router.get('/new', beersCtrl.new)
router.post('/', beersCtrl.create)

