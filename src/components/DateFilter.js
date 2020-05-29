import React, { useState, useContext } from 'react'
import { Context } from '../App'

function DateFilter() {

  const { state, dispatch } = useContext(Context);
  const [filter, setFilter] = useState("all");

  const handleFilter = (event) => {
    setFilter(event.target.id);
    dispatch({ type: "set-event-filter", filter: event.target.id });
  }

  return (
    <div id="date-filter">
      <button
        id="all"
        onClick={handleFilter}
        className={filter === "all" ? "selected" : ""}
      >
        ALL
      </button>
      <button
        id="june-11"
        onClick={handleFilter}
        className={filter === "june-11" ? "selected" : ""}
      >
        JUNE 11
      </button>
      <button
        id="june-12"
        onClick={handleFilter}
        className={filter === "june-12" ? "selected" : ""}
      >
        JUNE 12
      </button>
      <button
        id="june-13"
        onClick={handleFilter}
        className={filter === "june-13" ? "selected" : ""}
      >
        JUNE 13
      </button>
      <button
        id="june-14"
        onClick={handleFilter}
        className={filter === "june-14" ? "selected" : ""}
      >
        JUNE 14
      </button>
    </div>
  )
}

export default DateFilter
