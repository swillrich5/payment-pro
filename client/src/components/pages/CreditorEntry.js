import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import API from '../../utils/API';
import Heading from '../layout/Heading';

const CreditorEntry = () => {
    return (
        <div>
            <Heading />
            <h2>This page will allow for the entry of New Creditors</h2>
        </div>
    )

}

export default CreditorEntry;