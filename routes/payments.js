const express = require('express');
const router = express.Router();

// @route   GET api/payments
// @desc    Create a payment (due) for a creditor
// @access  Public
router.get('/', (req, res) => {
    res.send('Get payment record(s) for a creditor');
});

// @route   POST api/payments
// @desc    Create a payment (due) for a creditor
// @access  Public
router.post('/', (req, res) => {
    res.send('Create a payment due to a creditor');
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