import React from 'react';
import './About.css';
import img from './Image/about-us-image.jpg';
import secImg from './Image/section-line.png';
import aboutArrow from './Image/about-arrow.png';
const About = () => {
  return (
    <div className='container '>
      <div className='con-img'>
        <img src={img} alt='' />
      </div>
      <div className='con-info'>
        <span>About Us</span>
        <h3>We provide many courses</h3>
        <p>
          E D U T E C H was launched on the premise that everyone deserves
          access to a world-class education. In 2021, we built the first
          collection of free online college courses from the world’s top
          universities. The world of open education has exploded since then, so
          today our curated lists of online courses are hand selected by our
          staff to show you the very best offerings by subject area. We also
          make sure there is something for everyone: whether you want to explore
          a new topic or advance in your current field, we bring the amazing
          world of academia to you for free.
        </p>
        <img className='secImg' src={secImg} alt='' />
        <ul className='about-title'>
          <li>
            <img src={aboutArrow} alt='' />
            Oline Education
          </li>
          <li>
            <img src={aboutArrow} alt='' />
            Unlimited Access
          </li>
          <li>
            <img src={aboutArrow} alt='' />
            Detiacted to Your Success
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
