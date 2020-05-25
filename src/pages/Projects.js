import React from 'react'

/* assets */
import logotype from '../assets/logotype.svg'

function Projects() {
  return (
    <div id="projects">
      <div id="projects-hero">
        <div id="canvas"></div>
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
