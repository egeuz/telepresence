import React from 'react'
import hero from '../assets/about-hero.png'

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
    <div id = "about-hero">
      <div id = "content-wrapper">
        <h5>We are</h5>
        <h1>Creative Technologists</h1>
      </div>
    </div>
  )

}

export default About
