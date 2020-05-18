import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

function Header() {
  const { state, dispatch } = useContext(Context);

  const revealMenu = () => {
    dispatch({ type: "toggle-menu" });
  }
  
  const visitorCount = 52;
  return (
    <header>
      <Link to="/" id="logo">TELEPRESENCE</Link>
      <p>[there are {visitorCount} people here with you]</p>
      <nav>
        <Link to="/gallery">gallery</Link>
        <Link to="/events">events</Link>
        <Link to="/about">about</Link>
      </nav>
      <button
        id="menu-button"
        className={state.menuOpen ? "close" : ""}
        onClick={revealMenu}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Header
