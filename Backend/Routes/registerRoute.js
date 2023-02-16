const { urlencoded } = require('express');
const express = require('express');
const app = express();
const JWT = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const privateKey = 'lksjdflkjoehiuu39u483284098134hkj34jhjh';
const User = require('../Model/UserSchema');
app.use(express.json());
app.use(urlencoded({ extended: true }));


async function saveData(Password) {
    const Salt = await bycrypt.genSalt(10);
    const hashPass = await bycrypt.hash(Password, Salt);
    return hashPass;
}

app.post('/', (req, res) => {
    const { FullName, Email, Phone, Password } = req.body;
    try {
        User.findOne({ Email }, (err, found) => {
            if (err) {
                res.send({ message: err });
            }
            else if (found) {
                res.send({ message: `User with name ${FullName} already exist` });
            }
            else {
                const newUser = new User({
                    FullName: FullName,
                    Email: Email,
                    Phone: Phone,
                    Password: Password
                })
                newUser.save()
                .then(() => {
                    res.send({message : "user data saved"});
                })
                .catch((err) => {
                    res.send({message : `Error in saving data ${err}`});
                })
            }
        })
    } catch (error) {
        res.send(error);
    }
})

module.exports = app;
// try {
//     user.findOne({Email}, function(err, found){
//         if(err){
//             res.json({code : 404, error : err});
//         }
//         else if(found){
//             res.json({code : 500, message : 'Already registered try with another email'});
//         }
//         else{
//             saveData(Password)
//             .then(hashPass =>{
//                 const authorized = JWT.sign({payload : hashPass}, privateKey);
//                 console.log(authorized);
//                 const newUser = new user({
//                     FullName : FullName,
//                     Email : Email,
//                     Phone : Phone,
//                     Password : hashPass
//                 })
//                 newUser.save()
//                 .then(() => {
//                     res.cookie('token' , authregisteredorized);
//                     res.json({message : `user ${FullName} saved successfully`});
//                 })
//                 .catch(err => {
//                     res.json({message : err});
//                 })
//             })
//             .catch(err => console.log(err));
//         }
//     })
// } catch (error) {
//     console.log(error);
// }