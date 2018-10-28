/* eslint jsx-a11y/anchor-is-valid: "off" */
import React from 'react';
import './styles.scss';

const Navigation = props => {
    function navClick() {
        const navbarNav = document.querySelector('.navbar__nav');
        const navIcon = document.querySelector('#nav-icon i');

        if (navbarNav.className === "navbar__nav") {
            navbarNav.className += " navbar__nav--responsive";
            navIcon.className = 'fa fa-times';
        } else {
            navbarNav.className = "navbar__nav";
            navIcon.className = 'fa fa-bars';
        }
    }

    return(
        <nav className='navbar'>
            <div className='navbar__brand'></div>
            <div className='icon' id='nav-icon' onClick={navClick}><i className="fa fa-bars"></i></div>
            <ul className='navbar__nav'>
                <li className='navbar__nav-item'><a className="navbar__nav-link" href="#">Home</a></li>
                <li className='navbar__nav-item'><a className="navbar__nav-link" href="#">Projects</a></li>
                <li className='navbar__nav-item'><a className="navbar__nav-link" href="#">Blog</a></li>
                <li className='navbar__nav-item'><a className="navbar__nav-link" href="#">Social</a></li>
                <li className='navbar__nav-item'><a className="navbar__nav-link" href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;