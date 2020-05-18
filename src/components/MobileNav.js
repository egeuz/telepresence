import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

function MobileNav() {
  const { state, dispatch } = useContext(Context)

  const closeMobileNav = () => {
    dispatch({ type: "toggle-menu" })
  }

  return (
    <div id="mobile-nav" className={(state.menuOpen) ? "open" : ""}>
      <button id="mobile-nav-close" onClick={closeMobileNav}></button>
        <Link to="/gallery" onClick={closeMobileNav}>Showroom</Link>
        <Link to="/events" onClick={closeMobileNav}>Live Events</Link>
        <Link to="/about" onClick={closeMobileNav}>About</Link>
    </div>
  )
}

export default MobileNav
