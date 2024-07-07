import React, { useState } from 'react';
import './Courses.css'; // Create and import a CSS file for styling

const coursesData = [
  {
    id: 1,
    name: 'Computer Networks',
    duration: '10 hours',
    imageUrl: './images/CN.jpeg', // Updated path
    youtubeLink: 'https://www.youtube.com/watch?v=VwN91x5i25g&list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx'
  },
  {
    id: 2,
    name: 'Theory of Computation',
    duration: '15 hours',
    imageUrl: './images/TOC.jpg', // Same image for example
    youtubeLink: 'https://www.youtube.com/watch?v=58N2N7zJGrQ&list=PLBlnK6fEyqRgp46KUv4ZY69yXmpwKOIev'
  },
  {
    id: 3,
    name: 'Data Structures and Algorithms',
    duration: '20 hours',
    imageUrl: './images/DSA.png', // Same image for example
    youtubeLink: 'https://www.youtube.com/watch?v=AT14lCXuMKI&list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8LU'
  },
  {
    id: 4,
    name: 'Operating Systems',
    duration: '20 hours',
    imageUrl: './images/OS.jpeg', // Same image for example
    youtubeLink: 'https://www.youtube.com/watch?v=bkSWJJZNgf8&list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p'
  },
  {
    id: 5,
    name: 'Computer Architecture and Organization',
    duration: '20 hours',
    imageUrl: './images/CAO.jpeg', // Same image for example
    youtubeLink: 'https://www.youtube.com/watch?v=Ol8D69VKX2k&list=PLBlnK6fEyqRgLLlzdgiTUKULKJPYc0A4q'
  },
  {
    id: 6,
    name: 'Database Systems',
    duration: '20 hours',
    imageUrl: './images/DBS.jpg', // Same image for example
    youtubeLink: 'https://www.youtube.com/watch?v=6Iu45VZGQDk&list=PLBlnK6fEyqRi_CUQ-FXxgzKQ1dwr_ZJWZ'
  }
];

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterCourses(e.target.value);
  };

  const filterCourses = (term) => {
    const filtered = coursesData.filter(course =>
      course.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="courses">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredCourses.map(course => (
        <div key={course.id} className="coursenote">
          <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src={course.imageUrl} alt={course.name} className="course-image" />
          </a>
          <div className="course-details">
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses; 