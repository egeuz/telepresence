import React from 'react'
import VideoBackground from '../components/VideoBackground'

/* assets */
import blob from '../assets/blobs/1080blob.mp4'
import logotype from '../assets/logotype.svg'
import leftHand from '../assets/hand-left.png'
import rightHand from '../assets/hand-right.png'

function Projects() {
  return (
    <div id="projects">
      <div id="projects-hero">
        <div id="canvas">
          <div id="hands">
            <img src={leftHand} className="left-hand" alt="A spooky spectral left hand!"/>
            <img src={rightHand} className="right-hand" alt="A terrible ghastly right hand!"/>
          </div>
          <VideoBackground url={blob} position="center" />
        </div>
        <div id="content">
          <div id="tagline">
            <p><span>a cyber expo</span> hosted by</p>
            <p>first year parsons design &</p>
            <p>technology mfa students</p>
          </div>
          <img id="logotype" src={logotype} alt="Telepresence logo" />
        </div>
      </div>
      <div id="projects-showcase"></div>
    </div>
  )
}

export default Projects
