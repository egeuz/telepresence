import React from 'react'

import CategoryProjectList from './CategoryProjectList'

function ProjectFooter({project}) {
  return (
    <div id="project-footer">
      <div id="nav-buttons">
        <button>PREVIOUS PROJECT</button>
        <button>NEXT PROJECT</button>
      </div>
      <div id="similar-projects">
        <h6>SIMILAR PROJECTS</h6>
        <CategoryProjectList match={project.category} excludedProject={project} maxSize={8} />
      </div>
    </div>
  )
}

export default ProjectFooter
