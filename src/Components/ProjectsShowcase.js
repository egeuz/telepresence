import React, {useContext} from 'react'
import {GlobalState} from '../App'
import useScroll from '../Hooks/useScroll'

import Subheader from './Subheader'
import CategoryView from './CategoryView'
import StudentView from './StudentView'

function ProjectsShowcase({categories}) {

  const {state} = useContext(GlobalState)
  const {scrollPosition} = useScroll()

  return (
    <div id="projects-showcase" className={scrollPosition > window.innerHeight ? "offset" : "" }>
      <Subheader page="projects" />
      {
        state.projectsViewMode === "category" ? 
        <CategoryView categories={categories} /> : 
        <StudentView />
      }
    </div>
  )
}

export default ProjectsShowcase
