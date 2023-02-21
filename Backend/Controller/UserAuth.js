// require('dotenv').config({path : './../MY-APP/.env'})
const JWT = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const privateKey = process.env.privateKey;
const User = require('../Model/UserSchema');

// hashing password
async function saveData(Password) {
    const Salt = await bycrypt.genSalt(10);
    const hashPass = await bycrypt.hash(Password, Salt);
    return hashPass;
}

// Register Controller
async function Register(req, res) {
    const { FullName, Email, Phone, Password } = req.body;
    try {
        const user = await User.findOne({ Email }).exec();
        if (!user) {
            const hashedPassword = await saveData(Password);
            const newUser = new User({
                FullName: FullName,
                Email: Email,
                Phone: Phone,
                Password: hashedPassword
            })
            newUser.save()
            .then(() => {
                res.status(200).json({message : 'user successfully registered in the database'})
            })
            .catch((err) => {
                res.send(`Error in saving data ${err}`);
            })
        }
        else {
            res.status(404).json({message : 'already registered'});
        }
    } catch (error) {
        res.status().json({Error : error});
    }
}

// temporary data
const admin = {
    FullName: "Gaurav kumar",
    Email: "gauravrajpoot452@gmail.com",
    Password: "sonu@12345",
}

// Login Controller
async function Login(req, res) {
    const { Email, Password } = req.body;
    try {
        const customer = await User.findOne({ Email }).exec();
        if (customer) {
            let uid = customer.id;
            let token = JWT.sign(uid, privateKey, { algorithm: 'HS256' });
            if (Email === admin.Email && Password === admin.Password) {
                // res.cookie('Admin', true, {httpOnly: true, secure: true });
                res.status(200).json({message : 'Hello admin'});
            }
            else {
                res.cookie('isValid', token, {httpOnly: true, secure: true });
                res.status(200).json({message : 'Hello user'});
            }
        }
        else {
            res.status(400).json({message: `User not found!`});
        }
    } catch (error) {
        console.log(error);
    }
}

function Logout(req, res){
    res.cookie('isValid', '', {maxAge : 1});
    res.status(200).json({message : 'got the request!'});
}


async function getUserInfo(req, res){
    if(req.cookies.isValid){
        const token = req.cookies.isValid;
        const id = JWT.verify(token, privateKey);
        const customer = await User.findById({_id : id}).exec();
        const customerData = {
            Email : customer.Email,
            Cart : customer.Cart
        }
        res.status(200).json({isAuthenticated : true, Data : customerData});
    }
    else{
        res.status(404);
    }
}

module.exports = {Register, Login, Logout, getUserInfo};




