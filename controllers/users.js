const fetch = require('node-fetch');

module.exports = { show }

function show(req, res) {
    console.log(res.locals)
}

