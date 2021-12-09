const {engine} = require('express-handlebars');
const express = require('express');


function setupExpress(app) {
    //setts up the view engine in express
    app.engine('hbs', engine({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');

    // setts up static files folder
    app.use(express.static('public'))

    // sets up parser for form data
    app.use(express.urlencoded({
        extended: true
    }))
}

module.exports = setupExpress;