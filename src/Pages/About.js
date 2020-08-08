import React, { useState, useEffect } from 'react'
import fetchPageContent from '../CMS/fetchPageContent'
/* COMPONENTS */
import VideoBackground from '../Components/VideoBackground'
import AboutLanding from '../Components/AboutLanding'
import AboutContent from '../Components/AboutContent'

function About() {

  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPageContent("about", setContent)
  }, [])

  return (
    <React.Fragment>
      {
        content &&
        <div id="about">
          <VideoBackground
            videoURL={content.hero_video.url}
            imageURL={content.hero_image.url}
            attachment=""
            position="fullscreen"
          />
          <AboutLanding titles={content.things_we_are} />
          <AboutContent content={content} />
        </div>
      }
    </React.Fragment>
  )
}

export default About
