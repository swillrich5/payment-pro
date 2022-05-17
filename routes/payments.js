const express = require('express');
const router = express.Router();

const Payment = require('../models/Payment');

// @route   GET api/payments/:creditorId
// @desc    Get all payments for a creditor
// @access  Public
router.get('/:creditorId', async (req, res) => {
    // res.send('Get payment record(s) for a creditor');

    try {
        const payments = await Payment.find({ Creditor: req.params.creditorId });
        console.log(payments);
        res.json(payments);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");        
    }
});


// @route   GET api/payments/:id
// @desc    Get a particular payment by id
// @access  Public
router.get('/payment/:id', async (req, res) => {
    // res.send('Get payment record(s) for a creditor');

    try {
        const payment = await Payment.findById(req.params.id);
        console.log(payment);
        res.json(payment);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");        
    }
});


// @route   POST api/payments
// @desc    Create a payment (due) for a creditor
// @access  Public
router.post('/', async (req, res) => {
    const { statementDate, currentBalance, minimumPayment, paidDate, comments, creditorId } = req.body;

    try {
        payment = new Payment({
            statementDate,
            currentBalance,
            minimumPayment,
            paidDate,
            comments,
            creditorId
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
router.delete('/:id', async (req, res) => {
    try {
        let payment = Payment.findById(req.params.id);
        if (!payment) return res.status(404).json({ mes: 'Payment Not Found'});

        await Payment.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Payment removed'})
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;