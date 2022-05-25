import React, { useState } from 'react';
import API from '../../utils/API';
import Heading from '../layout/Heading';

const PaymentEntry = () => {

    return (
        <div>
            <Heading />
            <h3>This page will allow the user to input a payment due record for a creditor.</h3>
        </div>
    )
}

export default PaymentEntry;