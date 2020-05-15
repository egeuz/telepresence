import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

import { Context } from '../App'

function Header() {

  const { state, dispatch } = useContext(Context);

  const [scrollPos, setScrollPos] = useState(window.pageYOffset);
  const revealMenu = () => {
    dispatch({ type: "toggle-menu" });
  }

  const handleScroll = () => {
    console.log(window.pageYOffset)
    setScrollPos(window.pageYOffset)
  }

  const setHeaderPosition = () => {
    //if you dip below window height 
    if (scrollPos >= window.innerHeight) {
      
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  console.log(scrollPos);

  return (
    <header
      className={
        scrollPos >= window.innerHeight ? "fixed" :
        ""
      }
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Placeholder logo! Change soon!"
        />
      </Link>
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
