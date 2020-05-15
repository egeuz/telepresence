import React from 'react'
import CategoryCard from './CategoryCard'

function Showcase() {
  return (
    <div id="showcase">
      <div id="category-details">

      </div>
      <div id="category-grid">
        <div id="category-filters"></div>
        <div id="category-cards">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  )
}

export default Showcase
