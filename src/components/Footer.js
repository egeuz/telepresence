import React, {useContext} from 'react'
import {Context} from '../App'

import ParsonsLogo from '../assets/parsons-logo.svg'

function Footer() {

  const {state} = useContext(Context);
  return (
    <footer className={state.currentModalEvent ? "blur" : ""}>
      <div id="social-media-links">
      <a href="https://www.instagram.com/mfadt/" target="_blank" rel="noopener noreferrer"> instagram</a>
      <a href="https://twitter.com/mfadt" target="_blank" rel="noopener noreferrer"> twitter </a>
      </div>
      <a href="https://www.newschool.edu/parsons/" target="_blank" rel="noopener noreferrer">
        <img src={ParsonsLogo} alt="Parsons School of Design Logo" id="parsons-logo" />
      </a>
    </footer>
  )
}

export default Footer
