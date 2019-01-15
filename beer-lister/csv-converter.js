const json2csv = require('json2csv').parse;
const fields = ['name', 'breweryName'];
const opts = { fields };

function generate(data) {
    return json2csv(data, opts);
}

module.exports = { generate };