const express = require('express');
const router = express.Router();

const Payment = require('../models/Payment');

// @route   GET api/payments
// @desc    Create a payment (due) for a creditor
// @access  Public
router.get('/', (req, res) => {
    res.send('Get payment record(s) for a creditor');
});

// @route   POST api/payments
// @desc    Create a payment (due) for a creditor
// @access  Public
router.post('/', async (req, res) => {
    const { statementDate, currentBalance, minimumPayment, paidDate, comments, Creditor } = req.body;

    try {
        payment = new Payment({
            statementDate,
            currentBalance,
            minimumPayment,
            paidDate,
            comments,
            Creditor
        });
        await payment.save();
        res.send("Payment Saved");

    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

// @route   PUT api/payments/:id
// @desc    Update a payment (due) for a creditor
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update a payment due to a creditor');
});

// @route   DELETE api/payments/:id
// @desc    Delete a payment (due) for a creditor
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Delete a payment due to a creditor');
});

module.exports = router;