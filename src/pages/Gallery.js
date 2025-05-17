import React from 'react';
import './Gallery.css'; // Import the CSS file

const Gallery = () => {
  const images = [
   
    '/images/temple15.jpeg',
    '/images/temple11.jpeg',
    '/images/temple13.jpeg',

    '/images/temple12.jpeg',
    '/images/temple14.1.jpeg',
    '/images/temple14.jpeg',

    
    '/images/temple16.1.jpeg',
    '/images/temple16.jpeg',
    '/images/temple17.1.jpeg',
    '/images/temple17.jpeg',
    '/images/temple18.jpeg',
    '/images/temple19.jpeg',
    '/images/temple4.jpeg',
    '/images/temple3.jpeg',
    '/images/temple3.jpeg',
 
   
    '/images/temple6.jpeg',
    '/images/temple5.jpeg',
    '/images/temple20.jpeg',
    '/images/temple21.jpeg',
    '/images/temple22.jpeg',
    '/images/temple23.jpeg',
   
    '/images/temple24.jpeg',
    '/images/temple25.jpeg',
   
    '/images/temple27.jpeg',
    '/images/temple28.jpeg',
   
    '/images/temple29.jpeg',
    '/images/temple30.jpeg',
   
    '/images/temple26.jpeg',
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">శివాలయం ఫోటోలు</h1>
      
      <div className="gallery-grid">
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt=""
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
