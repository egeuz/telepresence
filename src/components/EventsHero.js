import React from 'react'

/* components */
import VideoBackground from './VideoBackground'
/* assets */
import blob from '../assets/blobs/1080blob.mp4'

function EventsHero({ modalBlur }) {
  return (
    <div id="events-hero" className={modalBlur ? "blur" : ""}>
      <VideoBackground url={blob} position="center" />
      <div id="content">
        <h5>JOIN US FOR A 4-DAY CYBER EXPO</h5>
        <div id="tagline">
          <span>JUNE 11–14</span><br />
          A PROGRAM OF ARTIST TALKS, WORKSHOPS, AND LIVE DEMOS
        </div>
      </div>
    </div>
  )
}

export default EventsHero
