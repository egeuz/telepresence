import React, { useState, useEffect, useContext } from 'react'
import { GlobalState } from '../App'
import useScroll from '../Hooks/useScroll'

function Subheader({ page }) {
  const { scrollPosition, scrollDirection } = useScroll()
  const { dispatch } = useContext(GlobalState)

  return (
    <div
      id="subheader"
      className={`${scrollPosition > window.innerHeight ? "fixed" : ""} ${scrollDirection === "up" ? "offset" : ""}`}
    >
      {page === "projects" ? <ProjectViewToggle dispatch={dispatch} /> : <DateFilter dispatch={dispatch} />}
    </div>
  )
}

function ProjectViewToggle({ dispatch }) {
  const [viewMode, setViewMode] = useState("category")


  const handleProjectToggle = (event) => {
    const viewMode = event.target.innerHTML.toLowerCase()
    setViewMode(viewMode)
    dispatch({ type: "toggle-projects-view-mode", viewMode })
  }

  useEffect(() => {
    dispatch({ type: "toggle-projects-view-mode", viewMode: "category" })
    return () => {
      dispatch({ type: "toggle-projects-view-mode", viewMode: "category" })
    }
  }, [dispatch])

  return (
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
  )

}

function DateFilter({ dispatch }) {
  const [dateFilter, setDateFilter] = useState("all")

  const handleDateFilter = (event) => {
    const filter = event.target.innerHTML.toLowerCase().replace(/ /g, "-");
    setDateFilter(filter);
    dispatch({ type: "set-date-filter", filter })
  }

  useEffect(() => {
    dispatch({ type: "set-date-filter", filter: "all" })
    return () => {
      dispatch({ type: "set-date-filter", filter: "all" })
    }
  }, [dispatch])

  return (
    <div id="date-filter">
      <button
        className={dateFilter === "all" ? "selected" : ""}
        onClick={handleDateFilter}
      >
        ALL
      </button>
      <button
        className={dateFilter === "august-27" ? "selected" : ""}
        onClick={handleDateFilter}
      >
        AUGUST 27
      </button>
      <button
        className={dateFilter === "august-28" ? "selected" : ""}
        onClick={handleDateFilter}
      >
        AUGUST 28
      </button>
      <button
        className={dateFilter === "august-29" ? "selected" : ""}
        onClick={handleDateFilter}
      >
        AUGUST 29
      </button>
    </div>
  )
}

export default Subheader
