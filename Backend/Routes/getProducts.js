const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const { getProducts, getProduct } = require('../Controller/fetchProducts');

app.use(cookieParser());


// protected route checking if the product id is provided then only going forward and finding data
function isInput(req, res, next){
    const {_id} = req.body;
    if(!_id){
        throw Error(404);
    }
    else{
        next();
    }
}

app.route('/')
.get(getProducts)
.post(isInput, getProduct)


module.exports = app;