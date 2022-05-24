import React, { useState } from 'react';
import API from '../../utils/API';
import Heading from '../layout/Heading';

const CreditorEntry = () => {

    const [companyName, setCompanyName] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [cardType, setCardType] = useState("");
    const [endingIn, setEndingIn] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [messageOne, setMessageOne] = useState("");

    function companyNameChange (e) {
        setCompanyName(e.target.value);
    }

    function cardholderNameChange (e) {
        setCardholderName(e.target.value);
    }

    function cardTypeChange (e) {
        setCardType(e.target.value);
    }

    function endingInChange (e) {
        setEndingIn(e.target.value);
    }

    function interestRateChange (e) {
        setInterestRate(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        API.saveCreditor({
            companyName: companyName,
            cardholderName: cardholderName,
            cardType: cardType,
            endingIn: endingIn,
            interestRate: interestRate
        })
        .then(res => {
            console.log("Creditor Saved");
        })
        .catch(err => {
            console.log(err);
        });

        setMessageOne("Creditor Saved");
        const timer = setTimeout(() => {
            setMessageOne("");
            setCompanyName("");
            setCardholderName("");
            setCardType("");
            setEndingIn("");
            setInterestRate("");
        }, 3000 );
        return () => clearTimeout(timer);
    }

    return (
        <div>
            <Heading />
            <div className="container px-6">
                <form className="text-primary col-8 mx-auto mt-5" onSubmit={handleSubmit}>
                    <div className="row ml-1">
                        <div className="form-group col-xs-5 mr-5 pr-5">
                            <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Company Name</label>
                            <input type="text" name="companyName" value={ companyName } onChange={(e) => companyNameChange(e)} className="form-control" id="request-title" placeholder="Company" />
                        </div>
                        <div className="form-group col-xs-5 pl-3 ml-5">
                            <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Cardholder Name</label>
                            <input type="text" name="cardholderName" value={ cardholderName } onChange={(e) => cardholderNameChange(e)} className="form-control" id="request-title" placeholder="John Doe" />
                        </div>                        
                    </div>
                    <div className="row ml-1">
                        <div className="form-group col-xs-3">
                            <label className="lead font-weight-bold" htmlFor="cardType">Card Type</label>
                            {/* <input type="text" name="cardType" value={ cardType } onChange={(e) => cardTypeChange(e)} className="form-control" id="request-title" placeholder="Visa Mastercard" /> */}
                            <select className="form-control" id="cardType" name="cardType" onChange={(e) => cardTypeChange(e)} value={ cardType }>
                                <option value="visa">Visa</option>
                                <option value="mastercard">Mastercard</option>
                                <option value="discover">Discover</option>                                
                                <option value="gascard">Gas Card</option>
                                <option value="bill">Monthly Bill</option>
                                <option value="other">Other</option>                                
                            </select> 
                        </div>
                        <div className="form-group col-xs-3 ml-3">
                            <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Ending In</label>
                            <input type="text" name="endingIn" value={ endingIn } onChange={(e) => endingInChange(e)} className="form-control" id="request-title" placeholder="" />
                        </div>  
                        <div className="form-group col-xs-3 ml-3">
                            <label className="lead font-weight-bold" htmlFor="exampleFormControlInput1">Interest Rate</label>
                            <input type="text" name="interestRate" value={ interestRate } onChange={(e) => interestRateChange(e)} className="form-control" id="request-title" placeholder="" />
                        </div>                               
                    </div>                               
                    <div className="row ml-1">
                        <button type="submit" className="btn btn-primary btn-lg px-5 font-weight-bold">Submit</button>
                        { (messageOne.length > 0) && <p className="lead ml-5">{messageOne}</p> }
                    </div>
                </form>
            </div>
        </div>
    )

}

export default CreditorEntry;