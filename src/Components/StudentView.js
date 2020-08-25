import React, { useContext } from 'react'
import { GlobalState } from '../App'
import useWindowSize from '../Hooks/useWindowSize'

/* COMPONENTS */
import StudentCard from './StudentCard'
import VideoBackground from './VideoBackground'

function StudentView({ bgVideo, bgImage }) {

  const { state } = useContext(GlobalState);
  const { windowWidth } = useWindowSize();

  return (

    <div id="student-view">
      <VideoBackground
        videoURL={windowWidth < 500 ? "" : bgVideo.url}
        imageURL={bgImage.url}
        attachment=""
        position="fullscreen"
      />
      <div className="card-grid">
        {
          state.projects.map((project, index) => {
            if (
              index === 0 || (state.projects[index - 1] &&
                state.projects[index - 1].data.authors[0].last_name[0].text[0] < project.data.authors[0].last_name[0].text[0])
            ) {
              return (
                <React.Fragment key={project.data.title[0].text}>
                  <div className="letter-card">
                    <div>{project.data.authors[0].last_name[0].text[0]}</div>
                  </div>
                  <StudentCard key={project.data.title[0].text} project={project.data} />
                </React.Fragment>
              )
            } else {
              return <StudentCard key={project.data.title[0].text} project={project.data} />
            }
          })
        }
      </div>
    </div>
  )
}

export default StudentView
