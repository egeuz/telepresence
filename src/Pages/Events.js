import React, { useState, useEffect, useContext } from 'react'
import {GlobalState} from '../App'
import { RichText } from 'prismic-reactjs'
import fetchPageContent from '../CMS/fetchPageContent'

/* COMPONENTS */
import VideoBackground from '../Components/VideoBackground'
import EventsShowcase from '../Components/EventsShowcase'
import EventModal from '../Components/EventModal'

function Events() {

  const {state} = useContext(GlobalState)
  const [content, setContent] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchPageContent("events_landing", setContent)
  }, [])

  return (
    <React.Fragment>
      { 
        state.modalEvent && 
        <EventModal event={state.modalEvent} /> 
      }
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
