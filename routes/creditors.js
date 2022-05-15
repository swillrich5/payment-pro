const express = require('express');
const router = express.Router();

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
router.post('/', (req, res) => {
    res.send('Create a creditor');
});

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