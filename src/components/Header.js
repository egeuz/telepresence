import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'
import hamburgerMenu from '../assets/icons/hamburger-menu.svg'

import useScroll from '../hooks/useScroll'

function Header() {
  const { state, dispatch } = useContext(Context);
  const {scrollPosition, scrollDirection} = useScroll();

  const revealMenu = () => {
    dispatch({ type: "toggle-menu" });
  }

  const visitorCount = 52;
  return (
    <header className={(scrollDirection === "down" && scrollPosition > window.innerHeight / 4) ? "hidden" : state.currentModalEvent ? "blur" : ""}>
      <Link to="/" id="logo">TELEPRESENCE</Link>
      <p>[there are {visitorCount} people here with you]</p>
      <nav>
        <Link to="/projects">projects</Link>
        <Link to="/events">events</Link>
        <Link to="/about">about</Link>
      </nav>
      <button
        className={state.menuOpen ? "close" : ""}
        onClick={revealMenu}
      >
        <img src={hamburgerMenu} alt="Click here to open the menu!" />
      </button>
    </header>
  )
}

export default Header
