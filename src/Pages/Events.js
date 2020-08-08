import React, { useState, useEffect } from 'react'
import { RichText } from 'prismic-reactjs'
import fetchPageContent from '../CMS/fetchPageContent'

/* COMPONENTS */
import VideoBackground from '../Components/VideoBackground'
import EventsShowcase from '../Components/EventsShowcase'


function Events() {

  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPageContent("events_landing", setContent)
  }, [])

  console.log(content);

  return (
    <React.Fragment>
      {
        content &&
        <div id="events">
          <VideoBackground
            videoURL={content.hero_video.url}
            imageURL={content.hero_image.url}
            attachment=""
            position="fullscreen"
          />

          <div id="events-landing">
            <div>
              <h5>{RichText.asText(content.blurb)}</h5>
              <p>{RichText.asText(content.dates)}</p>
              <p>{RichText.asText(content.tagline)}</p>
            </div>
          </div>
          
          <EventsShowcase />
        </div>
      }
    </React.Fragment>
  )
}

export default Events
