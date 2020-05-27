import { useState, useEffect } from 'react'

function useScroll() {

  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState("up");

  const handleScroll = () => {
    setScrollPosition(prevPosition => {
      const scrollPosition = window.scrollY
      const scrollDirection = (prevPosition >= scrollPosition) ? "up" : "down"
      setScrollDirection(scrollDirection);
      return scrollPosition;
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return { scrollPosition, scrollDirection }
}

export default useScroll
