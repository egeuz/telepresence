import React from 'react'
import { RichText } from 'prismic-reactjs'

function AuthorInfo({ project, inGrid = false }) {
  return (
    <div id="author-info" className={`${inGrid ? "in-grid" : ""}`}>
      <div id="line" />
      {
        project.authors.map((author, index) => {
          return (
            <div key={`author-${index}`} className="author">
              <h3>
                {RichText.asText(author.first_name)} {RichText.asText(author.last_name)}
              </h3>
              <p>{RichText.asText(author.about)}</p>
            </div>
          )
        })
      }
      <div id="social-media-links">
        {
          project.author_links.map((link, index) =>
            <a key={`${link.source}-${index}`} href={link.url.url}>{RichText.asText(link.source).toUpperCase()}</a>
          )
        }
      </div>
    </div>
  )
}

export default AuthorInfo