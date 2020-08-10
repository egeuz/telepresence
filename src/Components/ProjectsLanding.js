import React from 'react'
import useMousePosition from '../Hooks/useMousePosition'
import mapRange from '../Helpers/mapRange'

function ProjectsLanding({ leftHand, rightHand, logotype }) {

  const { mouseX, mouseY } = useMousePosition();

  const leftHandParallax = {
    opacity: `${0.8 + mapRange(mouseX, 0, window.innerWidth, 0, 0.25) + mapRange(mouseY, 0, window.innerHeight, 0.25, 0)}`,
    transform: `translate(
                  ${mapRange(mouseX, 0, window.innerWidth, 0, 16)}px,
                  ${mapRange(mouseY, 0, window.innerHeight, 0, 16)}px
                )`,
    filter: `blur(${mapRange(mouseX, 0, window.innerWidth, 0, 2) + mapRange(mouseY, 0, window.innerHeight, 2, 0)}px)`
  }

  const rightHandParallax = {
    opacity: `${0.8 + mapRange(mouseX, 0, window.innerWidth, 0.25, 0) + mapRange(mouseY, 0, window.innerHeight, 0, 0.25)}`,
    transform: `translate(
                  ${mapRange(mouseX, 0, window.innerWidth, 0, 16)}px,
                  ${mapRange(mouseY, 0, window.innerHeight, 0, 16)}px
                )`,
    filter: `blur(${mapRange(mouseX, 0, window.innerWidth, 2, 0) + mapRange(mouseY, 0, window.innerHeight, 0, 2)}px)`
  }

  const logotypeParallax = {
    opacity: `${0.8 + mapRange(mouseX, 0, window.innerWidth, 0, 0.25) + mapRange(mouseY, 0, window.innerHeight, 0, 0.25)}`,
    transform: `translate(
                  ${mapRange(mouseX, 0, window.innerWidth, 0, -8)}px,
                  ${mapRange(mouseY, 0, window.innerHeight, 0, -8)}px
                )`,
    filter: `blur(${mapRange(mouseX, 0, window.innerWidth, 0, 1) + mapRange(mouseY, 0, window.innerHeight, 0, 1)}px)`
  }


  return (
    <div id="projects-landing">
      <div id="canvas">
        <div id="hands">
          <img
            src={leftHand.url}
            className="left-hand"
            alt={leftHand.alt}
            style={leftHandParallax}
          />
          <img
            src={rightHand.url}
            className="right-hand"
            alt={rightHand.alt}
            style={rightHandParallax}
          />
        </div>
      </div>
      <div id="content">
        <div id="tagline">
          <p><span>a cyber expo</span> hosted by</p>
          <p>parsons design & technology</p>
          <p>mfa rising thesis students</p>
        </div>
        <img
          id="logotype"
          src={logotype.url}
          alt="Telepresence logo"
          style={logotypeParallax}
        />
      </div>
    </div>
  )
}

export default ProjectsLanding
