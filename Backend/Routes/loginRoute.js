const express = require('express');
const app = express();
const User = require('../Model/UserSchema');

const admin = {
    FullName : "Gaurav kumar",
    Email : "gauravrajpoot452@gmail.com",
    Password : "sonu@12345",
}

app.post('/', (req, res) => {
    const {Email, Password} = req.body;
    try {
        User.findOne({Email, Password}, (err, found) => {
            if(err){
                res.json({message : err});
            }
            else{
                if(Email === admin.Email && Password === admin.Password){
                    res.json({message : `Hello Admin I'll show you all the data`});
                }
                else{
                    res.json({message : `You're authorized i'll show you the data`});
                }
            }
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app;