const beerClient = require('./api-client.js');
const csvConverter = require('./csv-converter.js');
const fs = require('fs');
const util = require('util');
const fs_writeFile = util.promisify(fs.writeFile);

async function create() {
    const beers = await beerClient.get();
    console.log(beers);
    const csv = csvConverter.generate(beers);
    fs_writeFile('./results.csv', csv);
}

create();