const { urlencoded } = require('express');
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken'); 
const bycrypt = require('bcrypt');
const privateKey = 'lksjdflkjoehiuu39u483284098134hkj34jhjh';
const usermodeldesign = require('../Schemas/UserSchema');
app.use(express.json());
app.use(urlencoded({extended:true}));

const user = usermodeldesign;

async function saveData(Password){
   const Salt = await bycrypt.genSalt(10);
   const hashPass = await bycrypt.hash(Password, Salt);
   return hashPass;
}

app.post('/', (req, res) => {
    const {FullName , Email, Phone, Password} = req.body;
    try {
        user.findOne({Email}, function(err, found){
            if(found){
                res.json({message : 'registered'});
            }
            else{
                saveData(Password)
                .then(hashPass =>{
                    const authorized = JWT.sign({payload : hashPass}, privateKey);
                    const newUser = new user({
                        FullName : FullName,
                        Email : Email,
                        Phone : Phone, 
                        Password : hashPass
                    })
                    newUser.save()
                    .then(() => {
                        res.cookie('token' , authorized);
                        res.json({message : 'saved'});
                    })
                    .catch(err => {
                        res.json({message : err});
                    })
                })
                .catch(err => console.log(err));
            }
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = app;