const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const JWT = require('jsonwebtoken');
const { urlencoded, json } = require('express');
const register = require('./Routes/registerRoute'); // signup route.
const login = require('./Routes/loginRoute'); // login route.
const products = require('./Routes/getProducts'); // getting some products on the page.
const payment = require('./Routes/razorpay-payment');
const addToCart = require('./Routes/addToCart');
const cookieParser = require('cookie-parser');
// const DB = require('./Routes/DB_CONNECT');
// connected mongodb here

//xn1zAE87mwYLhJ7A

mongoose.connect("mongodb+srv://gaurav:xn1zAE87mwYLhJ7A@giftapp-cluster.noynvon.mongodb.net/Gift-data?retryWrites=true&w=majority", {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log('successful with mongodb'))
.catch(err => console.log(err));

// included to get the body data
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true
}));
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
// app.use(DB);


// this is for sign up page backend;
app.use('/signup', register);
// this is for log in page backend;
app.use('/login', login);
// this is for showing up product.
app.use('/products', products);
// this route is used for adding item to customer cart
app.use('/addToCart', addToCart);
// this is for payment link
app.use('/payment', payment);


app.get('/', (req, res) => {
    // here i got the jwt secret token
    if(req.cookies.login){
        res.send('welcome admin');
    }
    else{
        res.send('not allowed to see the welcome message');
    }
})

app.listen("5000", function(){
    console.log('listening on port 5000');
})