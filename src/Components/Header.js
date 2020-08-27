import React, { useContext } from 'react'
import { GlobalState } from '../App'
import { Link } from 'react-router-dom'

/* ASSETS */
import hamburgerMenu from '../Assets/Icons/hamburger-menu.svg'

/* HOOKS */
import useScroll from '../Hooks/useScroll'

function Header({ mode }) {
  const { state, dispatch } = useContext(GlobalState);
  const { scrollPosition, scrollDirection } = useScroll();

  const revealMenu = () => {
    dispatch({ type: "toggle-menu" });
  }

  //replace with concurrent user count sometime 
  // const visitorCount = 52;

  return (
    <header
      id={mode === "simple" ? "simple" : ""}
      className={
        scrollDirection === "down" &&
          scrollPosition > window.innerHeight / 4 ?
          "hidden" :
          ""
      }
    >
      <Link to="/" id="logo">TELEPRESENCE</Link>
      {/* <p>[there are {visitorCount} people here with you]</p> */}
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
