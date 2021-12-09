const { Router } = require('express');
const productService = require('../services/productService')
const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll();

    res.render('home', {title: 'Cubicle', products });
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Cubicle add'});
});

router.post('/create', (req, res) => {
    // validate inputs

    let data = req.body
    productService.create(data)

    res.redirect('/products')
});

router.get('/details/:productId', (req, res) => {
    res.render('details', {title: 'Product Details'});
});

module.exports = router;