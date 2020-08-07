import React, { useContext } from 'react'
import { GlobalState } from '../App'
import StudentCard from './StudentCard'

function CategoryProjectList({ match, excludedProject = "", maxSize = "" }) {

  const { state } = useContext(GlobalState)



  console.log(match)

  return (
    <div className="category-project-list">
      {
        state.projects
          .filter((project, index) => {
            if (maxSize && index === maxSize - 1) return null;
            if (excludedProject) {
              return project.data.category === match && project.data.id !== excludedProject.id
            } else {
              return project.data.category === match
            }
          })
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
