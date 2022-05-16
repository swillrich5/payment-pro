const mongoose = require('mongoose');

const CreditorSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    cardholderName: {
        type: String,
        required: true
    },
    cardType: {
        type: String,
        required: false
    },
    endingIn: {
        type: String,
        required: false
    },
    interestRate: {
        type: Number
    },    
    // payments: [{type: Schema.Types.ObjectId, ref: "Payment" }]
});

module.exports = mongoose.model('creditor', CreditorSchema);