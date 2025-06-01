import React from 'react'
import arrow_icon from '../Assests/arrow.png'
import hand_icon from '../Assests/hand_icon.png'
import hero_image from '../Assests/hero_image.png'
import './Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
     <div className="hero-left">
      <h2>NEW ARRIVALS</h2>
      <div>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt=""/>
        </div>
        <p>collections</p>
        <p>For Everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" />
      </div>
     </div>
     <div className="hero-right">
      <img src={hero_image} alt="" />
     </div>
    </div>
  )
}

export default Hero