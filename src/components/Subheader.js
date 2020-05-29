import React, { useRef } from 'react'
import useScroll from '../hooks/useScroll'
import DateFilter from './DateFilter'

function Subheader({page}) {
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
      {page === "events" && <DateFilter /> }
    </div>
  )
}

export default Subheader
