const express = require('express')
const router = express.Router()
const beersCtrl = require('../controllers/beers')
// Require the auth middleware
const isLoggedIn = require('../config/auth');

module.exports = router

router.get('/', beersCtrl.index)
router.get('/new', isLoggedIn, beersCtrl.new)
router.post('/', isLoggedIn, beersCtrl.create)
router.get('/:id', beersCtrl.show)
