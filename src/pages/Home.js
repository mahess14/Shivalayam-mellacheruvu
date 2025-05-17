import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
    
      <h1>మేళ్లచెరువు శివాలయానికి స్వాగతం</h1>

      <p>ఇది తెలంగాణలో సూర్యపేట జిల్లాలోని మేళ్లచెరువు గ్రామంలో ఉన్న ఒక చారిత్రక శివాలయం.</p>
      
      {/* Image Carousel using images from public folder */}
      <div className="temple-carousel">
        <Carousel fade>
          <Carousel.Item interval={2000}>
            <img
              className="d-block "
              src="/images/temple7.jpeg"  // Direct path from public folder
              alt="Temple Main Entrance"
            />
          
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple5.jpeg"  // Make sure this image exists
              alt="Temple Sanctum"
            />
           
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple3.jpeg"  // Make sure this image exists
              alt="Temple Festival"
            />
           
          </Carousel.Item>

          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple4.jpeg"  // Make sure this image exists
              alt="Temple Festival"
            />
          </Carousel.Item>




          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple5.jpeg"  // Make sure this image exists
              alt="Temple Festival"
            />
           
          </Carousel.Item>


          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple6.jpeg"  // Make sure this image exists
              alt="Temple Festival"
            />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block"
              src="/images/temple7.jpeg"  // Make sure this image exists
              alt="Temple Festival"
            />
          </Carousel.Item>
          
        </Carousel>
      </div>

     
    </div>
  );
};

export default Home;