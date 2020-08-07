import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {GlobalState} from '../App'

/* COMPONENTS */
import CategoryProjectList from './CategoryProjectList'

function ProjectFooter({ project }) {

  const {state} = useContext(GlobalState);

  const prevProjectID = () => {
    const currentProjectIndex = state.projects.findIndex(p => p.data.id === project.id);
    const prevProjectIndex = currentProjectIndex - 1 >= 0 ? currentProjectIndex - 1 : state.projects.length - 1;
    const prevProject = state.projects[prevProjectIndex];
    return prevProject.data.id;
  }

  const nextProjectID = () => {
    const currentProjectIndex = state.projects.findIndex(p => p.data.id === project.id);
    const nextProjectIndex = currentProjectIndex + 1 < state.projects.length ? currentProjectIndex + 1 : 0;
    const nextProject = state.projects[nextProjectIndex];
    return nextProject.data.id;
  }

  return (
    <div id="project-footer">
      <div id="nav-buttons">
        <Link to={`../project/${prevProjectID()}`}>PREVIOUS PROJECT</Link>
        <Link to={`../project/${nextProjectID()}`}>NEXT PROJECT</Link>
      </div>
      <div id="similar-projects">
        <h6>SIMILAR PROJECTS</h6>
        <CategoryProjectList match={project.category} excludedProject={project} maxSize={8} />
      </div>
    </div>
  )
}

export default ProjectFooter
