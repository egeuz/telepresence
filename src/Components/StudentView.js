import React, { useContext } from 'react'
import { GlobalState } from '../App'

/* COMPONENTS */
import StudentCard from './StudentCard'

// <div className="letter-card">
// <div>S</div>
// </div>

function StudentView() {

  const { state } = useContext(GlobalState);

  return (

    <div id="student-view">
      {
        state.projects.sort((a, b) =>
          b.data.authors[0].last_name[0].text < a.data.authors[0].last_name[0].text ? 1 : -1
        ).map((project, index) => {
          if (
            index === 0 || (state.projects[index - 1] &&
              state.projects[index - 1].data.authors[0].last_name[0].text[0] < project.data.authors[0].last_name[0].text[0])
          ) {
            return (
              <React.Fragment>
                <div className="letter-card">
                  <div>{project.data.authors[0].last_name[0].text[0]}</div>
                </div>
                <StudentCard key={project.data.title[0].text} project={project.data} />
              </React.Fragment>
            )
          } else {
            return <StudentCard key={project.data.title[0].text} project={project.data} />
          }

        }

        )
      }
    </div>
  )
}

export default StudentView
