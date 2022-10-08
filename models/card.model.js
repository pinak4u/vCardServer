const mongoose = require("mongoose");

const CardSchema = new mongoose.Schema({
    name:String,
    phone:Number,
    countryCode:Number,
    address:String,
    city:String,
    state:String,
    email:String,
    company:String,
    facebookUrl:String,
    twitterUrl:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
})

const Card = mongoose.model('Card',CardSchema);
module.exports = Card;