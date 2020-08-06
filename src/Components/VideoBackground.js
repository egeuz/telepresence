import React from 'react'

function VideoBackground({ videoURL, imageURL, position = "center", attachment="fixed" }) {
  return (
    <div id="video-background">
      {
        videoURL && imageURL &&
        <div id="video-container" className={`${position} ${attachment}`}>
          <video src={videoURL} autoPlay muted loop />
          <img src={imageURL} alt="An abstract translucent blob, undulating in the dark." />
        </div>
      }
    </div>
  )
}

export default VideoBackground
