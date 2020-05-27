import React from 'react'
/* components */
import VideoBackground from '../components/VideoBackground'
import Subheader from '../components/Subheader'
/* assets */
import blob from '../assets/blobs/1080blob.mp4'

function Events() {
  return (
    <div id="events">
      <div id="events-hero">
        <div id="canvas">
          <VideoBackground url={blob} position="center" />
        </div>
        <div id="content">
          <h5>JOIN US FOR A 4-DAY CYBER EXPO</h5>
          <div id="tagline">
            <span>JUNE 11–14</span><br/>
            A PROGRAM OF ARTIST TALKS, WORKSHOPS, AND LIVE DEMOS
          </div>
        </div>
      </div>
      <div id="events-list">
        <Subheader page={"events"} />
      </div>
    </div>
  )
}

export default Events
