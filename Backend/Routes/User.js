const express = require('express');
const app = express();
const { Register, Login } = require('../Controller/userLoginAndRegister');

function checkBeforeRegister(req , res, next){
    const { FullName, Email, Phone, Password } = req.body;
    if(!FullName || !Email || !Phone || !Password){
        res.send("every field required");
    }
    else{
        next();
    }
}

function checkBeforLogin(req , res, next){
    const { Email, Password } = req.body;
    if( !Email || !Password){
        res.send("every field required");
    }
    else{
        next();
    }
}

app.route('/register')
.post(checkBeforeRegister, Register)

app.route('/login')
.post(checkBeforLogin, Login)

module.exports = app;