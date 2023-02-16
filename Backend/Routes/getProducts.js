const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const ProductModel = require('../Model/productSchema')
const products = ProductModel;

app.use(cookieParser());

// sending all the products to the frontend.
app.get('/', (req, res) => {
    try {
        products.find(function(err, data){
            if(data){
                res.cookie('rememberme', 'yes', {httpOnly: true, secure: true });
                res.send(data);
            }
            else{
                res.json({message : err});
            }
        })
    } catch (error) {
        res.json({message : error});
    }
})

app.post('/', (req, res) => {
    // console.log(req.cookies);
    const {_id} = req.body;
    try {
        products.findOne({_id}, function(err, data){
            if(data){
                res.json(data);
            }
            else{
                res.json(err);
            }
        })
    } catch (error) {
        res.json({message : error});
    }
})


module.exports = app;