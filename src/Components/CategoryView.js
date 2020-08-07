import React, { useContext } from 'react'
import { GlobalState } from '../App'
import { RichText } from 'prismic-reactjs'

/* COMPONENTS */
import CategoryCard from './CategoryCard'
import CategoryProjectList from './CategoryProjectList'

function CategoryView({ categories }) {

  const { state } = useContext(GlobalState)

  return (
    <div id="category-view">
      {
        state.currentCategory &&
        <div id="category-details">
          <h1>{RichText.asText(state.currentCategory.category_name)}</h1>
          <CategoryProjectList match={RichText.asText(state.currentCategory.category_name)} />
        </div>
      }
      <div id="category-list">
        {
          categories.map((category, index) => <CategoryCard key={index} category={category} />)
        }
      </div>
    </div>
  )
}

export default CategoryView
