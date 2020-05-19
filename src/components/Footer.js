import React from 'react'
import ParsonsLogo from '../assets/parsons-logo.svg'

function Footer({ parent }) {
  return (
    <footer className={parent ? "menu-footer" : ""}>
      <div id="social-media-logos">
        <a href="#" target="_blank" rel="noopener noreferrer">
          instagram
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          twitter
        </a>
      </div>
      <a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">
        <img src={ParsonsLogo} alt="Parsons School of Design Logo" />
      </a>

    </footer>
  )
}

export default Footer
