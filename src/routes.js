const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');
requireDir('./models');
const ProductController = require('./controllers/product_controller');

routes.get('/products', ProductController.index);

module.exports = routes;