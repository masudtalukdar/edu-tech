import React from 'react';
import './Contact.css';
import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className='help-info col-3'>
        <h3>Our Team</h3>
        <p>
          The EduTech team members are always there to support you. <br /> Thank
          You.
        </p>
        <button className='btn'>
          <a href='#'>Learn More</a>
        </button>
      </div>
      <div className='team-members col-9'>
        <img src={img1} alt='' />
        <img src={img2} alt='' />
        <img src={img3} alt='' />
      </div>
    </div>
  );
};

export default Contact;
