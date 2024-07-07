import React, { useState } from 'react';
import './Notes.css'; // Create and import a CSS file for styling

const notesData = [
  {
    id: 1,
    name: 'Database Systems',
    imageUrl: './images/DBS.jpg',
    modules: [
      { name: 'Module 1', pdfUrl: 'https://drive.google.com/file/d/1O2veyqHVPEpJkP0fJxz8e-aRql55HDZx/view?usp=sharing' },
      { name: 'Module 2', pdfUrl: 'https://drive.google.com/drive/folders/153xWmK_lx22tN7jzA0sRnGZ729ocnUtd?usp=sharing' },
      { name: 'Module 3', pdfUrl: 'https://drive.google.com/drive/folders/1c4CqX66J3B8Nybg7gObtWvIQgS0w-DUu?usp=sharing' },
      { name: 'Module 4', pdfUrl: 'hhttps://drive.google.com/drive/folders/1FIGXndSF1bIC0HhVlMxBfFKoNr94HWgG?usp=sharing' },
      { name: 'Module 5', pdfUrl: 'https://drive.google.com/drive/folders/14B6ZjeyyKZCMQA8avks8QcHKzsrY10qC?usp=sharing' },
      { name: 'Module 6', pdfUrl: 'https://drive.google.com/drive/folders/165ZQr1OEFYLsCap2m-Xz3bvQXkTg48f0?usp=sharing' },
      { name: 'Module 7', pdfUrl: 'https://drive.google.com/file/d/12EemLNTwkUWDxQzD4OBWT58PgdYrO6pk/view?usp=sharing' },
    ],
  },
  {
    id: 2,
    name: 'Theory of Computation',
    imageUrl: './images/TOC.jpg',
    modules: [
      { name: 'Module 1', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-8>/preview' },
      { name: 'Module 2', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-9>/preview' },
      { name: 'Module 3', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-10>/preview' },
      { name: 'Module 4', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-11>/preview' },
      { name: 'Module 5', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-12>/preview' },
      { name: 'Module 6', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-13>/preview' },
      { name: 'Module 7', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-14>/preview' },
    ],
  },
  {
    id: 3,
    name: 'Data Structures and Algorithms',
    imageUrl: './images/DSA.png',
    modules: [
      { name: 'Module 1', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-15>/preview' },
      { name: 'Module 2', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-16>/preview' },
      { name: 'Module 3', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-17>/preview' },
      { name: 'Module 4', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-18>/preview' },
      { name: 'Module 5', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-19>/preview' },
      { name: 'Module 6', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-20>/preview' },
      { name: 'Module 7', pdfUrl: 'https://drive.google.com/file/d/<your-file-id-21>/preview' },
    ],
  },
  // Add more courses with modules as needed
];

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(notesData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterCourses(e.target.value);
  };

  const filterCourses = (term) => {
    const filtered = notesData.filter(course =>
      course.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="notes">
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {filteredCourses.map(course => (
        <div key={course.id} className="course">
          <img src={course.imageUrl} alt={course.name} className="course-image" />
          <div className="course-details">
            <h3>{course.name}</h3>
            <div className="modules">
              {course.modules.map((module, index) => (
                <button
                  key={index}
                  className="module-button"
                  onClick={() => window.open(module.pdfUrl, '_blank')}
                >
                  {module.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
