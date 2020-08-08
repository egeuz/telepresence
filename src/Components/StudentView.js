import React, { useContext } from 'react'
import { GlobalState } from '../App'

/* ASSETS */
import backgroundVideo from '../Assets/background.mp4'
import backgroundImage from '../Assets/background.png'
/* COMPONENTS */
import StudentCard from './StudentCard'
import VideoBackground from './VideoBackground'

function StudentView() {

  const { state } = useContext(GlobalState);

  return (

    <div id="student-view">
      <VideoBackground 
        videoURL={backgroundVideo} 
        imageURL={backgroundImage} 
        attachment="" 
        position="fullscreen"
      />
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
  )
}

export default StudentView
