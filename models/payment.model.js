const mongoose = require("mongoose");
const PaymentSchema = new mongoose.Schema({
    paymentRefId:String,
    paymentGateway:String,
    amount:String,
    User:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
});

const PaymentModel = mongoose.model('Payment',PaymentSchema);
module.exports = PaymentModel;
