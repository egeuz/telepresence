import React, { useContext } from 'react'
import { GlobalState } from '../App'
import StudentCard from './StudentCard'

function CategoryProjectList({ match, excludedProject = "", maxSize = "" }) {

  const { state } = useContext(GlobalState)

  return (
    <div className="category-project-list">
      {
        state.projects
          .filter((project, index) => {
            if (maxSize && index === maxSize - 1) return null;
            if (excludedProject) {
              return project.data.category === match && project.data.nameID !== excludedProject.nameID
            } else {
              return project.data.category === match
            }
          })
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
