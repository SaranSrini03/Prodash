import React, { useState } from 'react';
import Nav from './Nav/Nav';
import './Material.css';

const Material = () => {
  const pageSize = 6; // Number of entries per page

  // Example data with multiple entries and additional names
  const detailsData = [
    {
      name: 'John Doe',
      date: '2024-03-12',
      dueDate: '2024-03-20',
      material: 'Book',
      studentId: '12345',
      description: 'Developed.',
      action: 'Read',
    },
    {
      name: 'Jane Smith',
      date: '2024-03-15',
      dueDate: '2025-03-25',
      material: 'Notebook',
      studentId: '67890',
      description: 'Implemented',
      action: 'Write',
    },
    {
      name: 'Alice Johnson',
      date: '2024-03-18',
      dueDate: '2024-03-26',
      material: 'Pen',
      studentId: '54321',
      description: 'Designed',
      action: 'Draw',
    },
    {
      name: 'Bob Anderson',
      date: '2024-03-20',
      dueDate: '2025-04-02',
      material: 'Laptop',
      studentId: '98765',
      description: 'Collaborated .',
      action: 'Code',
    },
    {
      name: 'Eva Martinez',
      date: '2024-03-22',
      dueDate: '2024-04-05',
      material: 'Paints',
      studentId: '13579',
      description: 'Contributed.',
      action: 'Create',
    },
    {
      name: 'Michael White',
      date: '2024-03-25',
      dueDate: '2025-04-10',
      material: 'Calculator',
      studentId: '24680',
      description: 'Implemented data',
      action: 'Calculate',
    },
    // Add more entries as needed
  ];

  // Additional data with similar entries
  const additionalDetails = [
    {
      name: 'Sarah Brown',
      date: '2024-03-28',
      dueDate: '2025-04-15',
      material: 'Graph Paper',
      studentId: '11223',
      description: 'Analyzed and visualized complex data sets.',
      action: 'Graph',
    },
    {
      name: 'David Wilson',
      date: '2024-04-02',
      dueDate: '2025-04-20',
      material: 'Markers',
      studentId: '33445',
      description: 'Created colorful and informative presentations.',
      action: 'Present',
    },
    {
      name: 'Olivia Turner',
      date: '2024-04-05',
      dueDate: '2025-04-25',
      material: 'Easel',
      studentId: '55667',
      description: 'Painted landscapes and abstract art.',
      action: 'Paint',
    },
    {
      name: 'Daniel Reed',
      date: '2024-04-10',
      dueDate: '2025-05-01',
      material: 'Microscope',
      studentId: '77889',
      description: 'Conducted scientific experiments.',
      action: 'Research',
    },
    {
      name: 'Grace Mitchell',
      date: '2024-04-15',
      dueDate: '2025-05-05',
      material: 'Keyboard',
      studentId: '99000',
      description: 'Composed and played music on the keyboard.',
      action: 'Compose',
    },
    {
      name: 'Nathan Foster',
      date: '2024-04-20',
      dueDate: '2025-05-10',
      material: 'Camera',
      studentId: '11221',
      description: 'Captured moments through photography.',
      action: 'Photograph',
    },
    // Add more entries as needed
  ];

  const totalEntries = detailsData.length + additionalDetails.length;
  const totalPages = Math.ceil(totalEntries / pageSize);

  const [currentPage, setCurrentPage] = useState(1);

  const getPageDetails = (pageNumber) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const pageDetails = [...detailsData, ...additionalDetails].slice(startIndex, endIndex);
    return pageDetails;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='materialContainer'>
      <Nav />
      <p className='title'>Student Details</p>
      <div className='contentContainer2'>
        <div className='infoRow'>
          <p className='name'>Name</p>
          <p className='date'>Date</p>
          <p className='duedate'>Due Year</p>
          <p className='materials'>Material</p>
          <p className='sid'>Student ID</p>
          <p className='des'>Description</p>
          <p className='action'>Action</p>
        </div>
        {getPageDetails(currentPage).map((details, index) => (
          <React.Fragment key={index}>
            <div className='infoRow'>
              <p className='name'>{details.name}</p>
              <p className='date'>{details.date}</p>
              <p className='duedate'>
                {new Date(details.dueDate).getFullYear()}
              </p>
              <p className='materials'>{details.material}</p>
              <p className='sid'>{details.studentId}</p>
              <p className='des'>{details.description}</p>
              <p className='action'>{details.action}</p>
            </div>
            <div className='spacer' />
          </React.Fragment>
        ))}
      </div>
      <div className='pagination'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
          <span
            key={pageNumber}
            className={`page ${pageNumber === currentPage ? 'active' : ''}`}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Material;
