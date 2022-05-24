import React, { useState, useEffect } from 'react';
import Spinner from '../../components/Spinner';
import API from '../../utils/API';
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
        return () => { ignore = true}
      })
  }, []);

    if (loading) {
      return (
        <Spinner />
      )
    } else {
      return (
        <div>
          {(!loading) && creditors.map(creditor => {
              return (
                <p key={ creditor._id}>{creditor.companyName}</p>
                  
              )
          })}
        </div>
      )
    }
}

export default Home