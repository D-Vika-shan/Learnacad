import React, { useState } from 'react';

const notesData = {
  '1st Year': {
    'Chemistry': 'Link to Chemistry notes',
    'Calculus': 'Link to Calculus notes',

    // Add more subjects as needed
  },
  '2nd Year': {
    'OS': 'Link to OS notes',
    'DBMS': 'Link to DBMS notes',
    // Add more subjects as needed
  },
  '3rd Year': {
    'SE': 'Link to OS notes',
    'DL': 'Link to DBMS notes',
    // Add more subjects as needed
  }
  // Add more years as needed
};

const Notes = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="notes">
      <h2>Notes</h2>
      <div className="years">
        {Object.keys(notesData).map(year => (
          <button key={year} onClick={() => setSelectedYear(year)}>
            {year}
          </button>
        ))}
      </div>

      {selectedYear && (<>
        <h3>{selectedYear}</h3>
        <div className="subjects side">
          
          {Object.keys(notesData[selectedYear]).map(subject => (
            <button key={subject} onClick={() => setSelectedSubject(notesData[selectedYear][subject])}>
              {subject}
            </button>
          ))}
        </div></>
      )}
      

      {selectedSubject && (
        <div className="note-content side">
          <h3>Notes</h3>
          <p>{selectedSubject}</p>
        </div>
      )}
    </div>
  );
};

export default Notes;
