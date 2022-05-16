const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Creditor = require('../models/Creditor');

// @route   GET api/creditors
// @desc    Get a list of all the creditors
// @access  Public
router.get('/', (req, res) => {
    res.send('Get a list of all the creditors');
});

// @route   GET api/creditors/:id
// @desc    Get a creditor (credit card company)
// @access  Public
router.get('/:id', (req, res) => {
    res.send('Get a particular creditor by id');
});

// @route   POST api/creditors
// @desc    Create a creditor (credit card company)
// @access  Public
router.post('/', 
    [
        // using express-validator to validate incoming data
        check('creditorName', 'Creditor name is required').not().isEmpty(),
        check('cardholderName', 'Cardholder Name is Required').not().isEmpty()
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('passed');
    }
);

// @route   PUT api/creditors/:id
// @desc    Update a creditor (credit card company)
// @access  Public
router.put('/:id', (req, res) => {
    res.send('Update a creditor');
});

// @route   DELETE api/creditors/:id
// @desc    Delete a creditor (credit card company)
// @access  Public
router.delete('/:id', (req, res) => {
    res.send('Create a creditor');
});

module.exports = router;