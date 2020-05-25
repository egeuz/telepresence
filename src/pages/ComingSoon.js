import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../App'
import fetchData from '../data/fetchData'
/* components */
import VideoBackground from '../components/VideoBackground'
import SignupForm from '../components/SignupForm'
/* assets */
import ParsonsLogo from '../assets/parsons-logo.svg'
import Blob from '../assets/blobs/1080blob.mp4'

function ComingSoon() {
  const { dispatch } = useContext(Context);
  const [content, setContent] = useState("a");

  useEffect(() => {
    //toggle header on render
    dispatch({ type: "toggle-header" });
    //fetch content from CMS
    fetchData("/coming-soon", setContent);
    //toggle header back on derender
    return () => {
      dispatch({ type: "toggle-header" });
    }
  }, [dispatch]);

  return (
    <div id="coming-soon">
      <VideoBackground url={Blob} />
      <div>
        <h1>{content && content.title}</h1>
        <h3>{content && content.dates}</h3>
        <p>{content && content.tagline}</p>
      </div>
      <div id="social-media-links">
        <a href="https://www.instagram.com/mfadt/" target="_blank" rel="noopener noreferrer"> instagram</a>
        <a href="https://twitter.com/mfadt" target="_blank" rel="noopener noreferrer"> twitter </a>
      </div>
      <SignupForm />
      <div id="slogan">
        {content && content.slogan}
      </div>
      <a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">
        <img src={ParsonsLogo} alt="Parsons School of Design Logo" id="parsons-logo" />
      </a>
    </div>
  )
}

export default ComingSoon
