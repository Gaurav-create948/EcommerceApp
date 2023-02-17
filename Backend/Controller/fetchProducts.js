const ProductModel = require('../Model/productSchema');

async function getProducts(req, res) {
    try {
        const products = await ProductModel.find().exec();
        if(products){
            res.status(200).send(products);
        }
        else{
            throw new Error('products not found in the database');
        }
    } catch (error) {
        res.status(404).send(error);
    }
}

async function getProduct(req, res) {
    try {
        const {_id} = req.body;
        const product = await ProductModel.findById({_id}).exec();
        if(product){
            res.status(200).send(product);
        }
        else{
            throw new Error('product with the given id not found');
        }
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = { getProducts, getProduct }