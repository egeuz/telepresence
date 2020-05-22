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
      <img src={heroImage} alt="placeholder text" />
    </div>
  )
}

export default ComingSoon
