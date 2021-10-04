import React from 'react';
import './Footer.css';
import img from '../Header/Image/logo.png';

const Footer = () => {
  return (
    <div className=' footer-container'>
      <footer className='footer'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='text-white pt-5'>
            <h1>Contact Us</h1>

            <div className='input pb-3'>
              <input type='text' />
              <input type='password' />
            </div>
            <input className='text-area' type='text-area' />
            <br />
            <br />
            <button className='btn btn-success'>Send</button>
          </div>
          <div className='col-md-3'>
            <div>
              <img className='footer' src={img} alt='' />
            </div>
          </div>
        </div>

        <div className='text-center pb-2'>
          <p>
            <small>All copyright @2021 EduTech</small>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
