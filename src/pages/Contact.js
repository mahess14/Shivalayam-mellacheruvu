import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className='contact'>
    <div className="contact-container">
      <h2><CiLocationOn className="contact-icon" size={24} />Contact & Location</h2>

      <p>
       మేళ్లచెరువు (గ్రామం & మండలం), 508246, సూర్యాపేట జిల్లా, తెలంగాణ.
      </p>

      <p>
        <FaPhoneAlt className="contact-icon" size={16} />
        Phone: xxxxxxxxxx
      </p>

      <p>
        <a
          href="https://maps.app.goo.gl/8nCwseV3ho9dF1b29"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLocationOn className="contact-icon" size={20} />
          View on Google Maps
        </a>
      </p>
    </div>
    </div>
  );
};

export default Contact;
