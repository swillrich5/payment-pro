const mongoose = require('mongoose');

const PaymentSchema = mongoose.Schema({
    statementDate: {
        type: Date,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    minimumPayment: {
        type: Number,
        required: true
    },
    paidDate: {
        type: Date,
        required: false
    },
    comments: {
        type: String,
        required: false
    },    
    creditorId: { 
        type: String,
        required: true
    }
});


module.exports = mongoose.model('payment', PaymentSchema);