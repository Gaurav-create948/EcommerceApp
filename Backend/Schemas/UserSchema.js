const mongoose = require('mongoose');

// this is the schema for user first time register.
const UserSchema = new mongoose.Schema({
    FullName : String,
    Email : String,
    Mobile : Number,
    Password : String,
    Cart : new Array(0)
})  

const User = mongoose.model('User' , UserSchema);

module.exports = User;