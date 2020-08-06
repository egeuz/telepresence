import React, { useContext } from 'react'
import { GlobalState } from '../App'
import StudentCard from './StudentCard'

function CategoryProjectList() {

  const { state } = useContext(GlobalState)

  return (
    <div className="category-project-list">
      {
        state.currentCategory &&
        state.projects
          .filter(project =>
            project.data.category === state.currentCategory.category_name[0].text
          )
          .sort((a, b) => 
            b.data.authors[0].last_name[0].text < a.data.authors[0].last_name[0].text ? 1 : -1
          )
          .map((project, index) =>
            <StudentCard
              key={`project-card-${index}`}
              mode="category-list"
              project={project.data}
            />
          )
      }
    </div>
  )
}

export default CategoryProjectList
