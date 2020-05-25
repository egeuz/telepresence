import React, {useState, useEffect} from 'react'

//about landing
//blob background — CSS
//cool text changing effect

const words = ["CREATIVE TECHNOLOGISTS", "SOMETHING ELSE"]

function About() {

  const [number, setNumber] = useState(0);

  useEffect(() => {

    const interval = setInterval(timer, 250);

    function timer() {
     //generate a random number
     //set the random number as the number state
    } 

    return () => {
      clearInterval(interval);
    }

  }, []);

  return (
    <div id="about">
      <div id="about-landing">
        <h5>WE ARE</h5>
        <p>{words[1]}</p>
      </div>
      <div id="about-content">
        <div id="left-column"></div>
        <div id="right-column"></div>
      </div>  
    </div>
  )

}

export default About
