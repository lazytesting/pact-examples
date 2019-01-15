const fetch = require("node-fetch");


const get = async function() {
    const url = "http://localhost:9999/";
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        const list = json.map(item=> {
            return {
                name: item.name,
                breweryName: item.brewery
            }
        })

        return list;
    } catch (error) {
        throw("oopsie: ", error);
    }
};



module.exports = { get }