import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../App'
import fetchData from '../data/fetchData'



function ComingSoon() {
  const { dispatch } = useContext(Context);
  const [content, setContent] = useState("a");

  useEffect(() => {
    //toggle header on render
    dispatch({ type: "toggle-header" });
    //fetch content from CMS
    fetchData("/coming-soon", setContent);
    //toggle it back on derender
    return () => {
      dispatch({ type: "toggle-header" });
    }
  }, [dispatch]);

  return (
    <div id="coming-soon">
      {
        content &&
        <div id="coming-soon-content">
          <h1>{content.title}</h1>
          <h3>{content.dates}</h3>
          <p>{content.tagline}</p>
          <div id="social-media-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              instagram
        </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              twitter
        </a>
            <div id="slogan">{content.slogan}</div>
          </div>
        </div>
      }

    </div>
  )
}

export default ComingSoon
