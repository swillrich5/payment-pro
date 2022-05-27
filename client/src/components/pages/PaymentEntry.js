import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import Spinner from '../../components/Spinner';
import Heading from '../layout/Heading';

const PaymentEntry = () => {

    const [statementDate, setStatementDate] = useState("");
    const [dueDate, setDueDate] = useState("");
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

    const currentBalanceChange = (e) => {
        setCurrentBalance(e.target.value);
    }

    const minimumPaymentChange = (e) => {
        setMinimumPayment(e.target.value);
    }

    const statementDateChange = (e) => {
        console.log(e.target.value);
        setStatementDate(e.target.value);
    }

    const dueDateChange = (e) => {
        console.log(e.target.value);
        setDueDate(e.target.value);
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
                <div className="jumbotron">
                    <Heading />
                    <div className="px-6">
                        <form className="text-primary col-8 mx-auto mt-5" onSubmit={handleSubmit}>
                            <div className="row ml-1">
                                { creditors.length ? (
                                    <div className="row mx-auto text-center">
                                        <label className="col-5 lead font-weight-bold" htmlFor="creditorCode">Company Name</label>
                                        <select name="creditorCode" className="form-control col-7" onChange={(e) => handleCreditorChange(e)}>
                                            <option>Select Creditor for Payment Due</option>
                                            { creditors.map(creditor => {
                                                return(<option key={creditor._id} value={creditor._id}>{creditor.companyName} - {creditor.endingIn}</option>
                                            )})}
                                        </select>
                                    </div> ) : <div>""</div> }
                            </div>
                            <div className="row ml-1 mt-4">
                                <div className="form-group col-xs-1">
                                    <label className="lead font-weight-bold" htmlFor="statementDate">Statement Date</label>
                                    <input onChange={statementDateChange} value={ dueDate } name="statementDate" type="date" className="form-control" id="statementDate"/>
                                </div>
                                <div className="form-group ml-5">
                                    <label className="lead font-weight-bold" htmlFor="dueDate">Due Date</label>
                                    <input onChange={dueDateChange} value={ dueDate } name="dueDate" type="date" className="form-control" id="dueDate"/>
                                </div>                        
                            </div>
                            <div className="row ml-1 mt-4">
                                <div className="form-group col-xs-1">
                                <label className="lead font-weight-bold" htmlFor="currentBalance">Current Balance</label>
                                    <input type="text" name="currentBalance" value={ currentBalance } onChange={(e) => currentBalanceChange(e)} className="form-control" id="request-title" placeholder="" />
                                </div>
                                <div className="form-group ml-5">
                                    <label className="lead font-weight-bold" htmlFor="minimumPayment">Minimum Payment</label>
                                    <input type="text" name="minimumPayment" value={ minimumPayment } onChange={(e) => minimumPaymentChange(e)} className="form-control" id="request-title" placeholder="" />
                                </div>                        
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