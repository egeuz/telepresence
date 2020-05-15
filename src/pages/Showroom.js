import React from 'react'
import Landing from '../components/Landing'
import Showcase from '../components/Showcase'

function Showroom(props) {
  return (
    <div id="showroom">
      { props.match.path === "/" && <Landing /> }
      <Showcase />
    </div>
  )
}

export default Showroom
