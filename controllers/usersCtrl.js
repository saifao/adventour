const fetch = require('node-fetch');

module.exports = { show }

let abc

function show(req, res) {
    console.log(res.locals)
    fetch('https://api.openbrewerydb.org/breweries')
        .then(res => res.json())
        .then(text => console.log(text[1]));
    // abc = getData()
    res.render('users/index')
}

// async function getData() {
//     // const response = await fetch("https://api.openbrewerydb.org/breweries")
//     // const data = await response.json();
//     // return data;

//     return text
// }