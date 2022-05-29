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
    const [messageOne, setMessageOne] = useState("");    

    useEffect(() => {
        loadCreditors();
    }, []);

    let loadCreditors = async () => {
        let ignore = false;
        await API.getCreditors()
            .then(res => {
                if (!ignore) {
                    let sortedCreditors = res.data.sort((a, b) => { return a.endingIn - b.endingIn } );
                    setCreditors(sortedCreditors);
                    setLoading(false);
                }
                return () => { ignore = true }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        API.savePayment({
            statementDate: new Date(statementDate),
            dueDate: new Date(dueDate),
            currentBalance: +currentBalance,
            minimumPayment: +minimumPayment,
            paidDate: new Date(paidDate),
            comments: comments,
            creditorId: creditorId
        })
        .then(res => {
            console.log("Payment Saved");
        })
        .catch(err => {
            console.log(err);
        });        

        setMessageOne("Payment Saved");
        const timer = setTimeout(() => {
            setStatementDate("");
            setDueDate("");
            setCurrentBalance("");
            setMinimumPayment("");
            setPaidDate("");
            setComments("");
            setMessageOne("");
            setCreditors(loadCreditors())
        }, 3000 );
        return () => clearTimeout(timer);

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

    const paidDateChange = (e) => {
        console.log(e.target.value);
        setPaidDate(e.target.value);
    }    

    const commentsChange = (e) => {
        console.log(e.target.value);
        setComments(e.target.value);
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
                <div className="text-center pt-3">
                    <h2 className="text-primary pl-3 font-weight-bold">Payment Entry</h2>
                </div>
                    <form className="text-primary col mx-auto mt-4" onSubmit={handleSubmit}>
                        <div className="row ml-1">
                            { creditors.length ? (
                                <div className="row form-group mx-auto">
                                    <label className="lead font-weight-bold mr-2" htmlFor="creditorCode">Company Name</label>
                                    <select name="creditorCode" className="form-control col-7" onChange={(e) => handleCreditorChange(e)}>
                                        <option>Select Creditor for Payment Due</option>
                                        { creditors.map(creditor => {
                                            return(<option key={creditor._id} value={creditor._id}>{creditor.companyName} - {creditor.endingIn}</option>
                                        )})}
                                    </select>
                                </div> ) : <div>""</div> }
                        </div>
                        <div className="row ml-1">
                            <div className=" col form-group">
                                <label className="lead font-weight-bold" htmlFor="statementDate">Statement Date</label>
                                <input onChange={statementDateChange} value={ statementDate } name="statementDate" type="date" className="form-control" id="statementDate"/>
                            </div>
                            <div className="col form-group ml-5">
                                <label className="lead font-weight-bold" htmlFor="dueDate">Due Date</label>
                                <input onChange={dueDateChange} value={ dueDate } name="dueDate" type="date" className="form-control" id="dueDate"/>
                            </div>  
                            <div className=" col form-group">
                                <label className="lead font-weight-bold" htmlFor="statementDate">Statement Date</label>
                                <input onChange={paidDateChange} value={ paidDate } name="paidDate" type="date" className="form-control" id="paidDate"/>
                            </div>                                                      
                        </div>
                        <div className="row ml-1">
                            <div className="col form-group">
                            <label className="lead font-weight-bold" htmlFor="currentBalance">Current Balance</label>
                                <input type="text" name="currentBalance" value={ currentBalance } onChange={(e) => currentBalanceChange(e)} className="form-control" id="request-title" placeholder="" />
                            </div>
                            <div className="col form-group ml-5">
                                <label className="lead font-weight-bold" htmlFor="minimumPayment">Minimum Payment</label>
                                <input type="text" name="minimumPayment" value={ minimumPayment } onChange={(e) => minimumPaymentChange(e)} className="form-control" id="request-title" placeholder="" />
                            </div>                        
                        </div>
                        <div className="row ml-1">
                            <div className="col form-group">
                                <label htmlFor="comments" className="lead font-weight-bold">Comments</label>
                                <textarea className="form-control" id="comments" rows="3" name="comments" value={ comments } onChange={(e) => commentsChange(e)}></textarea>
                            </div>                    
                        </div>          
                        <div className="row ml-1 text-center">
                                <button type="submit" className="btn btn-primary mx-3 px-3">Save Payment</button>  
                                { (messageOne.length > 0) && <p className="lead ml-5">{messageOne}</p> }                                    
                        </div>                                            
                    </form>
                </div>
            </div>
        )
    }
}

export default PaymentEntry;