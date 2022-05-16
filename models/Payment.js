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
    Creditor: {
        type: Schema.Types.ObjectId, ref: "Creditor"
    },    
})