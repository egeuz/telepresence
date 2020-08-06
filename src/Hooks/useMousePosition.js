import {useState, useEffect} from 'react'

function useMousePosition() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {

    const trackMousePosition = (event) => {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }

    window.addEventListener("mousemove", trackMousePosition);
    return () => {
      window.removeEventListener("mousemove", trackMousePosition);
    }
  }, [])

  return {mouseX, mouseY}
}

export default useMousePosition
