import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import thumbsUp from '../../images/scott-thumbs-up.png';
import './Navbar.css';

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
    <Link to='/' ><img id="navbar-logo" src={thumbsUp} Pro alt="pic" /></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="nav navbar-nav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to='/'>Payment Pro</Link>
                </li>             
                <li className="nav-item">
                    <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/about'>About</Link>  
                </li>
            </ul>
        </div>
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