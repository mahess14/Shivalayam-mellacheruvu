import React from 'react';
import './Timings.css'; // Optional: for styling

const Timings = () => {
  return (
    <div className="timings-container">
      <h2 className="timings-title">సందర్శన సమయం</h2>
      
      {/* Add your own image path here */}
      <img 
        src="/images/visiting1.jpg" 
        alt="Pooja Ceremony" 
        className="timings-image"
      />
      
      <ul className="timings-list">
        <li> <span>Morning: 5:00 AM - 12:30 PM</span></li>
        <li>Evening: 4:00 PM - 7:00 PM</li>
      </ul>
    </div>
  );
};

export default Timings;
