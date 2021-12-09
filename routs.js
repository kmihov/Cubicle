const { Router } = require('express');

const productController = require('./controllers/productController');
const homeController = require('./controllers/homeController')

const router = Router();

router.use('/products', productController);
router.use('/', homeController);
router.use('*', (req, res) => {
    res.render('404', {title: 'Not Found'})
});

module.exports = router;
