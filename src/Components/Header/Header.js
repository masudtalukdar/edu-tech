import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './Image/logo.png';

const Header = () => {
  return (
    <>
      <div className='header-bg'>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container-fluid'>
            <img className='mini_logo' src={logo} alt='' />

            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav d-flex aligin-items-center m-auto mb-2 mb-lg-0 '>
                <li className='nav-item'>
                  <Link to='/home'>Home</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/about'>About</Link>
                </li>
                <img className='desktop-logo' src={logo} alt='' />
                <li className='nav-item'>
                  <Link to='/courses'>Courses</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/footer'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
