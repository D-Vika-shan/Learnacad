import React from 'react';

const Course = ({ course }) => {
  const { image, name, duration, link } = course;

  return (
    <div className="course">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} width="150" height="100" />
      </a>
      <div>
        <h3>{name}</h3>
        <p>Duration: {duration}</p>
      </div>
    </div>
  );
};

export default Course;
