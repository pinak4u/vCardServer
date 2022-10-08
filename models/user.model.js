const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    dob:Date,
})

const User = mongoose.model('User',UserSchema);
module.exports = User;