const fetch = require('node-fetch');

module.exports = { show }

let abc

function show(req, res) {
    console.log(res.locals)

    // abc = getData()

}

// async function getData() {
//     // const response = await fetch("https://api.openbrewerydb.org/breweries")
//     // const data = await response.json();
//     // return data;

//     return text
// }