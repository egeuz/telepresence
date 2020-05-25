import React from 'react'

function VideoBackground({url}) {
  return (
    <div id="video-background">
      <div id="video-container">
        <video src={url} autoPlay muted loop />
      </div>
    </div>
  )
}

export default VideoBackground
