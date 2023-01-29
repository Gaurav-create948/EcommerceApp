const express = require('express');
const app = express();
const Product = require('../Schemas/productSchema');

app.post('/', (req, res) => {
    const {_id} = req.body;
    try {
        Product.findById({_id} , function(err, data){
            if(!err){
                console.log(data);
            }
            else{
                res.send(err);
            }
        })
    } catch (error) {
        res.send(error);
    }
})


module.exports = app;