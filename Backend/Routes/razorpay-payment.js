require('dotenv').config()
const express = require('express');
const app = express();
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

app.post('/', (req, res) => {
    const{price} = req.body;
    const options = {
        amount: Number(price),  // amount in the smallest currency unit
        currency: "INR",
      };
    instance.orders.create(options, function(err, order) {
        console.log(order);
    });
})

module.exports = app;

  