import React from 'react';
import '../../App.css';
import {Button} from '../Button/Button';
import './Hero.css';


function Hero() {
  return (
      <div className='hero-container'>
          <video src="/videos/hotel.mp4" autoPlay loop muted/>
        <h1>Welcome to  <span className='hotel-text'>Roswell</span> Hotel</h1>
        <p>A Better Place to Stay and Enjoy Vacation</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
             BOOK NOW! <i className='fas fa-concierge-bell hotel-text'/>
            </Button>
            
        </div>
      </div>
  )
}

export default Hero;
