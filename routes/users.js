var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users.js')

/* GET users listing. */
router.get('/', usersCtrl.show);

module.exports = router;
