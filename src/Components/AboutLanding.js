import React, { useState, useEffect } from 'react'

function AboutLanding({ titles }) {

  const [count, setCount] = useState(0);
  titles = titles[0].text.split(", ");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev >= titles.length - 1 ? 0 : prev + 1)
    }, 500)
    return () => clearInterval(interval);
  }, [titles.length])

  return (
    <div id="about-landing">
      <div id="landing-content">
        <h5>WE ARE</h5>
        <p className="poster">{titles[count]}</p>
      </div>
    </div>
  )
}

export default AboutLanding