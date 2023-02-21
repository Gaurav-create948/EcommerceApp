const express = require('express');
const { AddToCart } = require('../Controller/AddItemToCart');
const app = express();

app.route('/')
.post(AddToCart);

module.exports = app;