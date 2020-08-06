import React, { useState, useEffect, useContext } from 'react'
import { GlobalState } from '../App'
import { RichText } from 'prismic-reactjs'

/** CMS **/
import fetchPageContent from '../CMS/fetchPageContent'
import parsonsLogo from '../Assets/parsons-logo.svg'

/** COMPONENTS **/
import VideoBackground from '../Components/VideoBackground'
import SignupForm from '../Components/SignupForm'

function ComingSoon() {

  const {dispatch} = useContext(GlobalState)

  const [content, setContent] = useState("")

  useEffect(() => {
    dispatch({type: 'toggle-header'})
    fetchPageContent("coming_soon", setContent)

    return () => {
      dispatch({type: 'toggle-header'})
    }
  }, [dispatch])

  return (
    <React.Fragment>
      {
        content &&
        <div id="coming-soon">
          <VideoBackground
            videoURL={content.hero_video.url}
            imageURL={content.hero_image.url}
            position="right"
          />
          <div>
            <h1>{RichText.asText(content.title)}</h1>
            <h3>{RichText.asText(content.dates)}</h3>
            <p>{RichText.asText(content.tagline)}</p>
          </div>
          <div id="social-media-links">
            <a href="https://www.instagram.com/mfadt/" target="_blank" rel="noopener noreferrer"> instagram</a>
            <a href="https://twitter.com/mfadt" target="_blank" rel="noopener noreferrer"> twitter </a>
          </div>
          <SignupForm />
          <div id="page-bottom">
            <div id="slogan">{RichText.asText(content.slogan)}</div>
            <a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">
              <img src={parsonsLogo} alt="Parsons School of Design Logo" id="parsons-logo" />
            </a>
          </div>
        </div>

      }
    </React.Fragment>
  )
}

export default ComingSoon
