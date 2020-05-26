import React from 'react'

function VideoBackground({url, position}) {
  return (
    <div id="video-background">
      <div id="video-container" className={position}>
        <video src={url} autoPlay muted loop />
      </div>
    </div>
  )
}

export default VideoBackground
