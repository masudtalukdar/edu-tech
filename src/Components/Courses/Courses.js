import React, { useEffect, useState } from 'react';
import './Courses.css';
import courseDB from '../../courseDB';

const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    setCourse(courseDB);
  }, []);
  // console.log(course);
  return (
    <div className='course-container '>
      {course.map((course) => {
        return (
          <div className='card col-3'>
            <img className='img-fluid' src={course.thumbnail} alt='' />
            <div className=' card-body'>
              <h5 className='card-title'> {course.title}</h5>
              <p className='card-text text-white'>{course.short_description}</p>
              <h6 className='price'>
                Price :<span> $ {course.price}</span>
              </h6>
            </div>
            <button type='button' className='btn btn-info'>
              View Course
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
