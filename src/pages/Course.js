import React from 'react';
import { useParams } from 'react-router-dom';
import { courses } from '../data/courses';

function Course() {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
    </div>
  );
}

export default Course;
