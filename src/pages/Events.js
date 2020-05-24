import React from 'react'
import backImg from '../assets/IMG_4707.00_04_06_22.Still002.jpg';
import EventsDatesButton from '../components/EventsDatesButton';
import DataSection from '../components/DateSection';

function Events() {
  return (
  
    <div id="container">
      
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
    {/* end of landing section */}

   
  <div id="divider">
    <div id="buttonsHolder">

    <EventsDatesButton  />
      <EventsDatesButton  />
      <EventsDatesButton  />
      <EventsDatesButton  />
     
    </div>
 
     </div> 
     {/* end of buttons */}
      <div id="dateHolder">
      <DataSection />
      </div>
   
  

    </div>
   

   
  )

  
}

export default Events
