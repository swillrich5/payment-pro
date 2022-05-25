import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Spinner from '../../components/Spinner';
import Heading from '../layout/Heading';

const PaymentEntry = () => {

    const [statementDate, setStatementDate] = useState("");
    const [currentBalance, setCurrentBalance] = useState("");
    const [minimumPayment, setMinimumPayment] = useState("");
    const [paidDate, setPaidDate] = useState("");
    const [comments, setComments] = useState("");
    const [creditorId, setCreditorId] = useState("");
    const [creditors, setCreditors] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let ignore = false;
        API.getCreditors()
            .then(res => {
                console.log(res.data);
                if (!ignore) {
                    setCreditors(res.data);
                    setLoading(false);
                }
            })
            return () => { ignore = true }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

    }


    const handleCreditorChange = (e) => {
        setCreditorId(e.target.value);
        console.log(e.target.value);
    }


        if (loading) {
            return(
                <Spinner />
            )
        } else {
            return (
                <div>
                    <Heading />
                    <div className="container px-6">
                        <form className="text-primary col-8 mx-auto mt-5" onSubmit={handleSubmit}>
                            <div className="row ml-1">
                                { creditors.length ? (
                                    <div>
                                        <select name="creditorCode" className="form-group" onChange={(e) => handleCreditorChange(e)}>
                                            <option>Select Creditor for Payment Due</option>
                                            { creditors.map(creditor => {
                                                return(<option key={creditor._id} value={creditor._id}>{creditor.companyName} - {creditor.endingIn}</option>
                                            )})}
                                        </select>
                                    </div> ) : <div>""</div> }
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        <div>
            <Heading />
            <h3>This page will allow the user to input a payment due record for a creditor.</h3>
        </div>

}

export default PaymentEntry;