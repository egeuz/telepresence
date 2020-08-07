import React from 'react'

function ProjectCover({ project }) {
  return (
    <div>
      <div
        id="cover-image"
        style={{
          backgroundImage: `url(${project.cover_image.url})`
        }}
      />
    </div>
  )
}

export default ProjectCover
