import React from 'react';
import { Link } from 'react-router-dom';
import './CoursePreview.css'; // Assuming you have a CSS file for styling

const courses = [
  {
    name: 'Computer Networks',
    hours: '10 hours',
    image: 'https://media.licdn.com/dms/image/D5612AQH7Ka9cpyMa5A/article-cover_image-shrink_600_2000/0/1707035530376?e=2147483647&v=beta&t=5hXiRDV3r9WlOWhZcM4scZck9t3_tAmzhL_ZGFj2t2c',
    link: '/courses'
  },
  {
    name: 'Data Structures and Algorithms',
    hours: '20 hours',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY1xIFPuWKKzJ9x7JdQvq5Toir3XmxZ-MCg&s',
    link: '/courses'
  },
  {
    name: 'Theory of Computation',
    hours: '15 hours',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtQH_Ffz8Ydu-K_I1WeGkK23A3w8m1lMoTw&s',
    link: '/courses'
  },
];

function CoursePreview() {
  return (
    <div className="course-preview">
      {courses.map((course, index) => (
        <Link key={index} to={course.link} className="course-card">
          <img src={course.image} alt={course.name} />
          <div className="course-details">
            <h4>{course.name}</h4>
            <p>{course.hours}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CoursePreview;
