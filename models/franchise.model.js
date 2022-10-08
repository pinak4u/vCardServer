const mongoose = require("mongoose");

const FranchiseSchema = new mongoose.Schema({
    email:String,
    password:String,
    status:Boolean,
    card:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Card'
        }
    ]
})
const Franchise = mongoose.model('Franchise',FranchiseSchema);
module.exports = Franchise;