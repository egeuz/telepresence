import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Link, useLocation } from 'react-router-dom'

function StudentCard({ mode = "standard", project }) {
  const location = useLocation();

  return (
    <Link
      to={location.pathname.includes("project/") ?
        `../project/${project.nameID}` :
        `project/${project.nameID}`
      }
      className={`student-card ${mode}`}
    >
      <h3>{project.authors.map((author, index) =>
        index === 0 ?
          `${RichText.asText(author.first_name)} ${RichText.asText(author.last_name)}` :
          `and ${RichText.asText(author.first_name)} ${RichText.asText(author.last_name)}`
      ).reduce((acc, val) => acc + val)}</h3>
      <p>{RichText.asText(project.title)}</p>
      <button />
    </Link>
  )
}

export default StudentCard
