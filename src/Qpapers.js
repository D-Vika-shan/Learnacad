import React, { useState } from 'react';
import './Qpapers.css'; // Import your CSS file for styling

const pdfsData = [
  {
    id: 1,
    subject: 'Complex Variables and Linear Algebra',
    description: 'BMAT201L-A2+TA2+TAA2-CAT1_Answer key2',
    pdfUrl: "https://drive.google.com/file/d/1K8BGkz2NFnm077kWyh5J_M6aXXXKIFKj/view?usp=sharing"
  },
  {
    id: 2,
    subject: 'Database Systems',
    description: 'CSE2004 FAT 2K19 D1',
    pdfUrl: 'https://drive.google.com/file/d/1bMlnDNcCY88VNlooefjUI7qQQ0eOEj1n/view?usp=sharing'
  },
  {
    id: 3,
    subject: 'Database Systems',
    description: 'CSE2004 FAT 2K19 FALL 2018',
    pdfUrl: 'https://drive.google.com/file/d/1F6cM3zD175k1t9OjE7dAAeQV-_P8KVaV/view?usp=sharing'
  },
  {
    id: 4,
    subject: 'Database Systems',
    description: 'CSE2004 FAT 2K19 DBMS D2',
    pdfUrl: 'https://drive.google.com/file/d/1tbl1CO8FEw6IOHbH136L98gB9VEJ9BCJ/view?usp=sharing'
  },
  {
    id: 5,
    subject: 'Machine Learning',
    description: 'F Machine Learning FAT F1-2',
    pdfUrl: 'https://drive.google.com/file/d/1aE5yLw2Mxw3F0RIlp-Zole98EW7eSWXk/view?usp=sharing'
  },
  {
    id: 6,
    subject: 'Machine Learning',
    description: 'F Machine Learning FAT E2',
    pdfUrl: 'https://drive.google.com/file/d/1luiyf3WzJGKWJe3wlLiM4AKlYUahqtg7/view?usp=sharing'
  }
  
];

const Qpapers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPdfs, setFilteredPdfs] = useState(pdfsData);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    filterPdfs(e.target.value);
  };

  const filterPdfs = (term) => {
    const filtered = pdfsData.filter(pdf =>
      pdf.subject.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPdfs(filtered);
  };

  return (
    <div className="qpapers">
      <input
        type="text"
        placeholder="Search papers..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="pdf-list">
        {filteredPdfs.map(pdf => (
          <div key={pdf.id} className="pdf-item">
            <h3>{pdf.subject}</h3>
            <p>{pdf.description}</p>
            <a href={pdf.pdfUrl} target="_blank" rel="noopener noreferrer"><button>View PDF</button></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Qpapers;
