import React from 'react';
import { Link } from 'react-router-dom';
import './NotesPreview.css'; // Assuming you have a CSS file for styling

const notes = [
  {
    name: 'Database Systems',
    hours: 'Module 1-7',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBKsETRDGZ053npNn7x1x-m8bnltEYa910ug&s',
    link: '/notes'
  },
  {
    name: 'Operating Systems',
    hours: 'Module 1-7',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_0hzZQ_ZgZQa09fQLKnrsL37fX0hgI3Z15g&s',
    link: '/notes-web-development'
  },
  {
    name: 'Computer Architechture and Organization',
    hours: 'Module 1-7',
    image: 'data:image/jpeg;base64,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',
    link: '/notes-data-science'
  },
  
];

function NotesPreview() {
  return (
    <div className="notes-preview">
      {notes.map((notes, index) => (
        <Link key={index} to={notes.link} className="notes-card">
          <img src={notes.image} alt={notes.name} />
          <div className="notes-details">
            <h4>{notes.name}</h4>
            <p>{notes.hours}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NotesPreview;