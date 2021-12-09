const Cube = require('../models/cube')
const uniqId = require('uniqid');
const fs = require('fs')
let products = require('../config/products.json')

function getAll() {
    return products
}

function create(data) {
    let cube = new Cube(
        uniqId(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel
    );

    products.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(products), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = {
    getAll,
    create
}
