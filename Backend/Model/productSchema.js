const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    image : String,
    title : String,
    price : Number,
}) 

const Products = mongoose.model('Products' , ProductSchema);

module.exports = Products;