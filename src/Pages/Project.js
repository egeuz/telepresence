import React, { useEffect, useContext } from 'react'
import { GlobalState } from '../App'

/* COMPONENTS */
import ProjectCover from '../Components/ProjectCover'
import ProjectInfo from '../Components/ProjectInfo'
import ProjectContent from '../Components/ProjectContent'
import AuthorInfo from '../Components/AuthorInfo'
import ProjectFooter from '../Components/ProjectFooter'

function Project({ match }) {

  const { state, dispatch } = useContext(GlobalState);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (state.projects) {
      const projectData = state.projects.find(
        project => (project.data.projectID === match.params.projectID) || 
        (project.data.nameID === match.params.projectID)
      ).data
      dispatch({type: "set-current-project", project: projectData })
    }

    return () => {
      dispatch({type: "set-current-project", project: ""})
    }
  }, [state.projects, dispatch, match.params.projectID])

  return (
    <React.Fragment>
      {
        state.currentProject &&
        <div id="project">
          <ProjectCover project={state.currentProject} />
          <ProjectInfo project={state.currentProject} />
          <ProjectContent project={state.currentProject} />
          <AuthorInfo project={state.currentProject} />
          <ProjectFooter project={state.currentProject} />
        </div>
      }
    </React.Fragment>
  )
}


export default Project
