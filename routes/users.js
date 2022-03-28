var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/usersCtrl.js')

/* GET users listing. */
router.get('/', usersCtrl.show);

module.exports = router;
