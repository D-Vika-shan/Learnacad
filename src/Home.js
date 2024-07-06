import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from './data/courses';

function Home() {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
