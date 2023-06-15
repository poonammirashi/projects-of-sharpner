const express = require('express');

const controller = require('../controller/product');

const router = express.Router();

router.post('/add-product', controller.postAddProduct);

router.get('/get-product', controller.getProduct);

router.get('/get-products', controller.getProducts);

router.delete('/delete-product/:id', controller.postDeleteProduct)

module.exports = router;