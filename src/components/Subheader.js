import React, { useRef } from 'react'
import useScroll from '../hooks/useScroll'

function Subheader() {
  const subheader = useRef();
  const { scrollPosition, scrollDirection } = useScroll();
  const logElementPosition = () => console.log(subheader.current.offsetTop);

  return (
    <div
      id="subheader"
      ref={subheader}
      className={`
      ${scrollPosition > window.innerHeight ? "fixed" : ""}
      ${scrollDirection === "up" ? "offset" : ""}
      `}
    >
    </div>
  )
}

export default Subheader
