import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import Footer from './Footer'
function Menu() {

  const { state, dispatch } = useContext(Context)

  const handleNavClick = () => {
    dispatch({type: "toggle-menu"})
  }

  return (
    <div id="menu" className={(state.menuOpen) ? "open" : ""}>
      <nav>
        <Link to="/showroom" onClick={handleNavClick}>Showroom</Link>
        <Link to="/events" onClick={handleNavClick}>Live Events</Link>
        <Link to="/about" onClick={handleNavClick}>About</Link>
      </nav>
      <Footer parent="menu" />
    </div>
  )
}

export default Menu
