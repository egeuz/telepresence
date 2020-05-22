import React, { useEffect, useContext } from 'react'
import heroImage from '../assets/coming-soon-hero.png'
import { Context } from '../App'



function ComingSoon() {
  const { dispatch } = useContext(Context);

  useEffect(() => {
    //toggle header on render
    dispatch({ type: "toggle-header" });
    //toggle it back on derender
    return () => {
      dispatch({ type: "toggle-header" });
    }
  }, []);

  return (
    <div id="coming-soon">
      <h1>TELEPRESENCE</h1>
      <h3>JUNE 11 — 14</h3>
      <p>Join us to celebrate our first year MFA Design and Technology virtual show lorem ipsum dolor sit amet consectetur adipiscing elit</p>
      <div id="social-media-links">
        <a href="#" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
        <div id="tagline">A CYBER EXPO</div>
      </div>
    </div>
  )
}

export default ComingSoon
