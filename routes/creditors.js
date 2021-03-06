const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const Creditor = require('../models/Creditor');

// @route   GET api/creditors
// @desc    Get a list of all the creditors
// @access  Public
router.get('/', async (req, res) => {
    try {
        const creditors = await Creditor.find();  
        res.json(creditors);    
        // console.log(creditors);

    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

// @route   GET api/creditors/:id
// @desc    Get a creditor (credit card company)
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const creditors = await Creditor.findById(req.params.id);  
        res.json(creditors);    
        // console.log(creditors);

    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

// @route   POST api/creditors
// @desc    Create a creditor (credit card company)
// @access  Public
router.post('/', 
    [
        // using express-validator to validate incoming data
        check('companyName', 'Company name is required').not().isEmpty(),
        check('cardholderName', 'Cardholder Name is Required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { companyName, cardholderName, cardType, endingIn, interestRate } = req.body;

        try {
            let creditor = await Creditor.findOne({ endingIn });

            if (creditor) {
                return res.status(400).json({ msg: 'Creditor already exists' });
            }

            creditor = new Creditor({
                companyName,
                cardholderName,
                cardType,
                endingIn,
                interestRate
            });
            await creditor.save();
            res.send("Creditor Saved");

        } catch (err) {
            console.error(err.message);
            return res.status(500).send("Server Error");
        }
    }
);

// @route   PUT api/creditors/:id
// @desc    Update a creditor (credit card company)
// @access  Public
router.put('/:id', async (req, res) => {
    console.log(req.body);
    // res.send(req.body);

    try {
        let creditor = await Creditor.findById(req.params.id);

        if (!creditor) {
            return res.status(400).json({ msg: 'Creditor doesn\'t exist' });
        }

        const { _id, companyName, cardholderName, cardType, endingIn, interestRate } = req.body;

        await Creditor.findByIdAndUpdate(_id,
            {
                companyName,
                cardholderName,
                cardType,
                endingIn,
                interestRate
            });
        res.json(creditor);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

// @route   DELETE api/creditors/:id
// @desc    Delete a creditor (credit card company)
// @access  Public
router.delete('/:id', async (req, res) => {

    try {
        let creditor = Creditor.findById(req.params.id);
        if (!creditor) return res.status(404).json({ mes: 'Creditor Not Found'});
        await Creditor.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Creditor removed'})
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;