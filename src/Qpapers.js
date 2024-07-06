import React, { useState } from 'react';
import './Qpapers.css'; // Import your CSS file for styling

const pdfsData = [
  {
    id: 1,
    subject: 'Complex Variables and Linear Algebra',
    description: 'BMAT201L-A2+TA2+TAA2-CAT1_Answer key2',
    pdfUrl: "/papers/BMAT201L-A2+TA2+TAA2-CAT1_Answer key2.pdf"
  },
  {
    id: 2,
    subject: 'Computer Networks',
    description: 'Sample question papers for computer networks course.',
    pdfUrl: '/pdfs/computer-networks.pdf'
  },
  {
    id: 3,
    subject: 'Operating Systems',
    description: 'Operating systems question papers with solutions.',
    pdfUrl: '/pdfs/operating-systems.pdf'
  }
  // Add more PDFs as needed
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
