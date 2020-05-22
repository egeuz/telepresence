import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

function Header() {
  const { state, dispatch } = useContext(Context);

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("down");

  const handleScroll = () => {
    setScrollPosition(prevPosition => {
      const currentPosition = window.scrollY
      const scrollDirection = (prevPosition > currentPosition) ? "up" :
        (prevPosition < currentPosition) ? "down" : prevPosition
      setScrollDirection(scrollDirection) //set the scroll direction
      return window.scrollY; //set the scroll position
    })
  }

  useEffect(() => {

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, []);
  console.log(scrollDirection);

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
        className={state.menuOpen ? "close" : ""}
        onClick={revealMenu}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

export default Header
