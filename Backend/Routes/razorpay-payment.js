require('dotenv').config()
const express = require('express');
const app = express();
const crypto = require("crypto");
const Razorpay = require('razorpay');
const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

app.post('/', (req, res) => {
    const{price} = req.body;
    const options = {
        amount: Number(price)*100,  // amount in the smallest currency unit
        currency: "INR",
      };
    instance.orders.create(options, function(err, order) {
        if(err){
            return res.send({code : 404, message : "server error"});
        }
        return res.send({code:200, message : "order created" , data : order, keyId : process.env.KEY_ID});
    });
})

app.post('/verify', (req, res) => {
    let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;
    
    let expectedSignature = crypto.createHmac('sha256', process.env.KEY_SECRET).update(body.toString()).digest('hex');
    // let response = {"signatureIsValid":"false"}
    if(expectedSignature === req.body.razorpay_signature){
        // response={"signatureIsValid":"true"}
        res.send({code : 200, message : 'Payment Verified'});
    }
    else{
        res.send({code : 404, message : 'Payment Not Verified'});
    }
})

module.exports = app;
  