import React from 'react';
import './Competitions.css'; // Import your CSS file for styling

const competitions = [
  {
    id: 1,
    name: 'Hackathon 2024',
    date: 'July 15, 2024',
    description: 'A 24-hour hackathon to innovate and create amazing projects.',
    link: 'https://example.com/hackathon-2024'
  },
  {
    id: 2,
    name: 'Tech Challenge 2024',
    date: 'August 20, 2024',
    description: 'A competition for tech enthusiasts to solve challenging problems.',
    link: 'https://example.com/tech-challenge-2024'
  },
  {
    id: 3,
    name: 'AI Competition 2024',
    date: 'September 10, 2024',
    description: 'A competition focused on artificial intelligence and machine learning.',
    link: 'https://example.com/ai-competition-2024'
  }
  // Add more competitions as needed
];

const Competitions = () => {
  return (
    <div className="competitions">
      <h1>Upcoming Competitions</h1>
      <ul>
        {competitions.map(comp => (
          <li key={comp.id} className="competition-item">
            <h2>{comp.name}</h2>
            <p><strong>Date:</strong> {comp.date}</p>
            <p>{comp.description}</p>
            <a href={comp.link} target="_blank" rel="noopener noreferrer"><button>Details</button></a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Competitions;
