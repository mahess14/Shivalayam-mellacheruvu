import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Background Music */}
      <audio src="/audio/Omnama-shivaya.mp3" autoPlay loop />

      <h1>మేళ్లచెరువు శివాలయానికి స్వాగతం</h1>

      <p>ఇది తెలంగాణలో సూర్యపేట జిల్లాలోని మేళ్లచెరువు గ్రామంలో ఉన్న ఒక చారిత్రక శివాలయం.</p>
      
      {/* Image Carousel */}
      <div className="temple-carousel">
        <Carousel fade>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple7.jpeg" alt="Temple Main Entrance" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple5.jpeg" alt="Temple Sanctum" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple3.jpeg" alt="Temple Festival" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple4.jpeg" alt="Temple Festival" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple5.jpeg" alt="Temple Festival" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple6.jpeg" alt="Temple Festival" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img className="d-block" src="/images/temple7.jpeg" alt="Temple Festival" />
          </Carousel.Item>
        </Carousel>
      </div>

    </div>
  );
};

export default Home;
