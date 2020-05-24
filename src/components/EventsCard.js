import React from 'react';
import EventsDatesButton from '../components/EventsDatesButton';
import backImg from '../assets/IMG_4707.00_04_06_22.Still002.jpg';

function EventsCard() {
  return (
    <div className="EventsCard">
      <h4 id="type">Workshop</h4>
      <div id="backImg">  
      <img src={backImg} className="fit"/>
      </div>

      {/* info = title+name+button */}
      <div id="info">
          <div className="Side" id="left">
             <h3 id="eventsName">Prototyping</h3>
            <br></br>
            <caption-lg id="name">Mia Meus</caption-lg>
          </div>

          <div className="Side" id="right">
          <EventsDatesButton id="attend"/>

          </div>
  
        <p id="date">May 28 12-1PM</p> 
        <p id="moreInfo">More Info</p>
    </div>

      </div>
  
  )
}


// const EventsDatesButton = (props)=>{
//     return(    
    
//     <div id = {props.id}>
//         <p>{props.date}</p>
//     </div>);
    
//   }
export default EventsCard
