const express = require('express');
const app = express();
const validator = require('validator');
const { Register, Login, getUserInfo, Logout} = require('../Controller/UserAuth');

// Protect route before registering the user
function checkBeforeRegister(req , res, next){
    const { FullName, Email, Phone, Password } = req.body;
    if(validator.isEmail(Email)){
        if(!FullName || !Email || !Phone || !Password){
            res.send("every field required");
        }
        else{
            next();
        }
    }
    else{
        res.send(`${Email} is not a valid email`);
    }
}

// Protect route before loging the user
function checkBeforLogin(req , res, next){
    const { Email, Password } = req.body;
    if(validator.isEmail(Email)){
        if( !Email || !Password){
            res.send("every field required");
        }
        else{
            next();
        }
    }
    else{
        res.send(`${Email} is not a valid email`);
    }
}

app.route('/register')
.post(checkBeforeRegister, Register)

app.route('/login')
.post(checkBeforLogin, Login)

app.route('/logout')
.get(Logout)

app.route('/')
.get(getUserInfo)

module.exports = app;