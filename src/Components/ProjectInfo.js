import React from 'react'
import { RichText } from 'prismic-reactjs'

/* COMPONENTS */
import AuthorInfo from '../Components/AuthorInfo'

function ProjectInfo({ project }) {
  return (
    <div id="project-info">
      <div>
        <h2>{RichText.asText(project.title)}</h2>
        <p>{RichText.asText(project.description)}</p>
      </div>
      <AuthorInfo project={project} inGrid={true} />
    </div>
  )
}

export default ProjectInfo
