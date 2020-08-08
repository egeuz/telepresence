import React, { useState, useEffect, useContext } from 'react'
import { GlobalState } from '../App'
import useScroll from '../Hooks/useScroll'

function Subheader({ page }) {

  const [viewMode, setViewMode] = useState("category")
  const { scrollPosition, scrollDirection } = useScroll()
  const { dispatch } = useContext(GlobalState)

  const handleProjectToggle = (event = "") => {
    const viewMode = event.target.innerHTML.toLowerCase()
    setViewMode(viewMode)
    dispatch({ type: "toggle-projects-view-mode", viewMode })
  }

  useEffect(() => {
  }, [])

  return (
    <div
      id="subheader"
      className={`${scrollPosition > window.innerHeight ? "fixed" : ""} ${scrollDirection === "up" ? "offset" : ""}`}
    >
      {
        page === "projects" &&
        <div id="project-view-toggle">
          <h6>View by</h6>
          <div id="toggle-buttons">
            <button
              className={viewMode === "category" ? "selected" : ""}
              onClick={handleProjectToggle}
            >
              CATEGORY
            </button>
            <button
              className={viewMode === "student" ? "selected" : ""}
              onClick={handleProjectToggle}
            >
              STUDENT
            </button>
          </div>
        </div>
      }
      {
        page === "events" &&
        <div />
      }
    </div>
  )
}

export default Subheader
