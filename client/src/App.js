import React, { Fragment } from 'react';
// Switch has been replaced by Routes in react-router-dom
import  { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
// import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import CreditorEntry from './components/pages/CreditorEntry';
import PaymentEntry from './components/pages/PaymentEntry';


const App = () => {
  return (
    <Router>
      <Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              {/* In react v6, component was replaced by element */}
              <Route exact path='/' element={ <Home />} />
              <Route exact path='/about' element={ <About />} />
              <Route exact path='/creditor' element={ <CreditorEntry />} />
              <Route exact path='/payment' element={ <PaymentEntry />} />              
            </Routes>
          </div>
      </Fragment>
    </Router>
  );
}

export default App;
