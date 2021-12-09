const Cube = require('../models/cube')
const uniqId = require('uniqid');
const fs = require('fs/promises')
const path = require('path')
let products = require('../config/products.json')

function getAll(query) {
    let result = products

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        result = result.filter(x => Number(x.difficulty) >= query.from);
    }

    if (query.to) {
        result = result.filter(x => Number(x.difficulty) <= query.to);
    }

    return result
}

function getOne(id) {
    return products.find(x => x.id === id)
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

    return fs.writeFile(
        path.join(__dirname + '/../config/products.json'),
        JSON.stringify(products)
    );
}

module.exports = {
    getAll,
    getOne,
    create
}
