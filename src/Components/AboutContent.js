import React from 'react'
import { RichText } from 'prismic-reactjs'

function AboutContent({ content }) {

  const contributorSerializer = (type, element, content, children, key) => {
    if (element.type === "paragraph") {
      return <p id="contributors" key={key}>{children}</p>
    } else if (element.type === "hyperlink") {
      return <a key={key} href={element.data.url} target="_blank" rel="noopener noreferrer">{children}</a>
    } else {
      return null;
    }
  }

  const colophonSerializer = (type, element, content, children, key) => {
    if (element.type === "hyperlink") {
      return <a key={key} href={element.data.url} target="_blank" rel="noopener noreferrer">{children}</a>
    } else {
      return null;
    }
  }

  return (
    <div id="about-content">
      <div id="decoration">
        <img src={content.about_decoration.url} alt={content.about_decoration.alt} />
      </div>
      <div id="content">
        {RichText.render(content.about_text)}
        <RichText render={content.contributors} htmlSerializer={contributorSerializer} />
        <div id="colophon">
          <h5>COLOPHON</h5>
          <RichText render={content.colophon} htmlSerializer={colophonSerializer} />
        </div>
      </div>
    </div>
  )
}

export default AboutContent
