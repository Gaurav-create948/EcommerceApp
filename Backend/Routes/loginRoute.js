const express = require('express');
const app = express();
const User = require('../Model/UserSchema');

const admin = {
    FullName : "Gaurav kumar",
    Email : "gauravrajpoot452@gmail.com",
    Password : "sonu@12345",
}

app.post('/', async (req, res) => {
    const {Email, Password} = req.body;
    try {
        const customer = await User.findOne({Email, Password}).exec();
        if(customer){
            if(Email === admin.Email && Password === admin.Password){
                // res.cookie('Admin', true, {httpOnly: true, secure: true });
                res.json({code : 200, message : `Hello Admin I'll show you all the data`});
            }
            else{
                // res.cookie('Login', true, {httpOnly: true, secure: true });
                res.json({code : 200, message : `You're authorized i'll show you the data`});
            }
        }
        else{
            res.json({code : 404, message : `User not found!`});
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = app;