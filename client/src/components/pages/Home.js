import React, { useState, useEffect } from 'react';
import Heading from '../layout/Heading';
import Spinner from '../../components/Spinner';
import API from '../../utils/API';
import '../../App.css';
// import { useEffect } from 'react/cjs/react.production.min';

const Home = () => {
  
  const [loading, setLoading] = useState(false);
  const [creditors, setCreditors] = useState([]);

  useEffect(() => {
    setLoading(true);
    let ignore = false;
    API.getCreditors()
      .then(res => {
        console.log(res.data);
        if (!ignore) {
          setCreditors(res.data);
          setLoading(false);
        }
        return () => { ignore = true }
      })
  }, []);

    if (loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <div className="jumbotron mt-3">
          <Heading />
          <div>
            <table className="table">
              <tr>
                <th scope="col">Creditor Name</th><th scope="col">Cardholder</th><th>Card/Payment Type</th><th>Ending In</th><th>Interest %</th>
              </tr>
              {(!loading) && creditors.map(creditor => {
                  return (
                    <tr key={ creditor._id}>
                      <td>{creditor.companyName}</td>
                      <td>{creditor.cardholderName}</td>
                      <td>{creditor.cardType}</td>
                      <td>{creditor.endingIn}</td>
                      <td>{creditor.interestRate}</td>
                    </tr>
                  )
              })}
            </table>

          </div>

        </div>
      )
    }
}

export default Home