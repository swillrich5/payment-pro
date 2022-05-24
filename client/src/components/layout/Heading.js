import React from 'react';
import thumbsUp from '../../images/scott-thumbs-up.png';
import '../../index.css';

const Heading = () => {
    return (
        <div className="text-center pt-4">
                <h1 className="text-primary d-inline acme">Payment</h1>
                <img id="app-logo" className="" src={thumbsUp} alt="thumbs up pic" />
                <h1 className="text-primary d-inline acme">Pro</h1>
        </div>
    )
}

export default Heading