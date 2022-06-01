import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import thumbsUp from '../../images/scott-thumbs-up.png';
import './Navbar.css';

const Navbar = ({ title, icon }) => {
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">Payment Pro</Link>
            <button className="navbar-toggler navbar-dark bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon navbar-dark bg-primary"></span>
            </button>   
            <div className="collapse navbar-collapse navbar-dark bg-primary" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto navbar-dark bg-primary">
                    <li className="nav-item dropdown navbar-dark bg-primary">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" data-toggle="dropdown">Data Entry</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/'>Home</Link>
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/creditor'>Creditor Entry</Link> 
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/payment'>Payment Entry</Link>  
                        </div>
                    </li>
                    <li className="nav-item dropdown navbar-dark bg-primary">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" data-toggle="dropdown">Analytics</a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/'>Payment History</Link>
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/'>Creditor List</Link> 
                            <Link className="nav-link dropdown-item navbar-dark bg-primary" to='/'>Payment Entry</Link>  
                        </div>
                    </li>                    
                    <Link className="nav-link navbar-dark bg-primary" to='/about'>About</Link>  
                </ul>
            </div>                     
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Payment Pro',
    icon: ''
}

export default Navbar