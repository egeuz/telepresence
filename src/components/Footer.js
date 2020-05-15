import React from 'react'

import FacebookLogo from '../assets/facebook.svg'
import TwitterLogo from '../assets/twitter.svg'
import InstagramLogo from '../assets/instagram.svg'
import MediumLogo from '../assets/medium.svg'
import ParsonsLogo from '../assets/parsons-logo.svg'

function Footer({ parent }) {
  return (
    <footer className={parent ? "menu-footer" : ""}>
      <a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">
        <img src={ParsonsLogo} alt="Parsons School of Design Logo" />
      </a>
      <div id="social-media-logos">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={FacebookLogo} alt="Facebook social media logo." />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={TwitterLogo} alt="Twitter social media logo." />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={InstagramLogo} alt="Instagram social media logo." />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={MediumLogo} alt="Medium social media logo." />
        </a>
      </div>
    </footer>
  )
}

export default Footer
