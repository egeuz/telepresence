import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../App'

function MobileNav() {
  const { state, dispatch } = useContext(GlobalState)

  const closeMobileNav = () => {
    dispatch({ type: "toggle-menu" })
  }

  return (
    <div id="mobile-nav" className={(state.menuOpen) ? "open" : ""}>
      <button id="mobile-nav-close" onClick={closeMobileNav}></button>
        <Link to="/gallery" onClick={closeMobileNav}>Projects</Link>
        <Link to="/events" onClick={closeMobileNav}>Events</Link>
        <Link to="/about" onClick={closeMobileNav}>About</Link>
    </div>
  )
}

export default MobileNav
