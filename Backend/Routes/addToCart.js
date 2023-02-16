const express = require('express');
const app = express();
const Product = require('../Model/productSchema');
const User = require('../Model/UserSchema');

app.post('/', async (req, res) => {
    const { Product, Email } = req.body;
    // try {
    //     const foundUser = await User.findOne({ Email }).exec();
    //     if(foundUser){
    //         foundUser.Cart.push(Product);
    //         console.log(foundUser.Cart.length);
    //         res.json({foundUser});
    //     }
    //     else{
    //         res.json({message : "User not found!"});
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
    try {
        const updatedUser = await User.findOneAndUpdate(
            { Email: Email }, // first finding user with this email
            { $push: { Cart: Product } }, // then updating the cart $push method do it push product to end of the cart
            { new: true } // Return the updated user after the update
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});



module.exports = app;