require('dotenv').config({path : './../../MY-APP/.env'})
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const { urlencoded } = require('express');
const UserRoutes = require('./Routes/User');
const products = require('./Routes/getProducts'); // getting some products on the page.
const payment = require('./Routes/razorpay-payment');
const addToCart = require('./Routes/addToCart');
const cookieParser = require('cookie-parser');

// const DB = require('./Routes/DB_CONNECT');
// mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.passo}@giftapp-cluster.noynvon.mongodb.net/Gift-data?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true})

// connected mongodb here

const DB_USERNAME = process.env.db_username;
const DB_PASSWORD = process.env.db_password;

// console.log('from app', process.env);

mongoose.connect(`mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@giftapp-cluster.noynvon.mongodb.net/Gift-data?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true})
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


// this is for sign up page backend;
app.use('/', UserRoutes);
// this is for log in page backend;
app.use('/', UserRoutes);
// this is for logout page backend;
app.use('/', UserRoutes);
// get user info if the cookie is set;
app.use('/', UserRoutes);
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