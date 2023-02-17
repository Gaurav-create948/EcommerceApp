const JWT = require('jsonwebtoken');
const bycrypt = require('bcrypt');
const privateKey = 'lksjdflkjoehiuu39u483284098134hkj34jhjh';
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
            const newUser = new User({
                FullName: FullName,
                Email: Email,
                Phone: Phone,
                Password: Password
            })
            newUser.save()
                .then(() => {
                    res.send("user data saved");
                })
                .catch((err) => {
                    res.send(`Error in saving data ${err}`);
                })
        }
        else {
            // throw Error(`User already exist with ${Email}`); for screen
            res.send(`User already exist with ${Email}`);
        }
    } catch (error) {
        res.send(error);
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
        const customer = await User.findOne({ Email, Password }).exec();
        if (customer) {
            if (Email === admin.Email && Password === admin.Password) {
                // res.cookie('Admin', true, {httpOnly: true, secure: true });
                // res.json({code : 501, Cart : customer.Cart});
                res.send('Hello admin');
            }
            else {
                // res.cookie('Login', true, {httpOnly: true, secure: true });
                // res.json({code : 200, Cart : customer.Cart});
                res.send('Hello User');
            }
        }
        else {
            res.json({ code: 404, message: `User not found!` });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {Register, Login};




/*
    hashing password and storing the jwt signed token in the client.

try {
    user.findOne({Email}, function(err, found){
        if(err){
            res.json({code : 404, error : err});
        }
        else if(found){
            res.json({code : 500, message : 'Already registered try with another email'});
        }
        else{
            saveData(Password)
            .then(hashPass =>{
                const authorized = JWT.sign({payload : hashPass}, privateKey);
                console.log(authorized);
                const newUser = new user({
                FullName : FullName,
                Email : Email,
                         Phone : Phone,
                         Password : hashPass
                     })
                 newUser.save()
                 .then(() => {
                     res.cookie('token' , authregisteredorized);
                     res.json({message : `user ${FullName} saved successfully`});
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


*/