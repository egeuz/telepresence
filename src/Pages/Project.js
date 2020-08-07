import React, { useState, useEffect, useContext } from 'react'
import { GlobalState } from '../App'

/* COMPONENTS */
import ProjectInfo from '../Components/ProjectInfo'
import AuthorInfo from '../Components/AuthorInfo'
import ProjectFooter from '../Components/ProjectFooter'

function Project({ match }) {

  const { state } = useContext(GlobalState);
  const [project, setProject] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (state.projects) {
      const projectData = state.projects.find(
        project => project.data.id === match.params.projectID
      ).data
      setProject(projectData)
    }
  }, [state.projects, match.params.projectID])

  console.log(match.params.projectID); 


  return (
    <React.Fragment>
      {
        project &&
        <div id="project">
          <div
            id="cover-image"
            style={{
              backgroundImage: `url(${project.cover_image.url})`
            }}
          />
          <ProjectInfo project={project} />
          <div id="project-content">
          </div>
          <AuthorInfo project={project} />
          <ProjectFooter project={project} />
        </div>
      }
    </React.Fragment>
  )
}


export default Project
