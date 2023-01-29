const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const ProductModel = require('../Schemas/productSchema')
const products = ProductModel;

app.use(cookieParser());

app.get('/', (req, res) => {
    try {
        products.find(function(err, data){
            if(data){
                // res.cookie('test' , 'test1');
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