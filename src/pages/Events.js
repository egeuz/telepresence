import React from 'react'
import '../styles/pages/_events.scss';
import backImg from '../assets/IMG_4707.00_04_06_22.Still002.jpg';

function Events() {
  return (
    <div id="backgroundImg">
      {/* background Image */}
      <img src={backImg} className="size"/>

      {/* Text Container */}
      <div id="textBox">
      {/* sub title */}
      <p id="subTitle">
      join us for a 4-day cyber expo
      </p>
      {/* introduction text */}
      <p id="introDate">
      june 11–14
      <p id="introText">
      a program of artist talks, workshops, and demos
      </p>


      </p>

      </div>
  
    </div>
  )


}

export default Events
