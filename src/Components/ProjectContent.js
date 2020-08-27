import React, {useEffect, useRef} from 'react'
import { RichText } from 'prismic-reactjs'

function ProjectContent({ project }) {

  return (
    <div id="project-content">
      {
        project.body1.map((section, index) => {
          switch (section.slice_type) {
            case 'text_box':
              return (
                <TextBox
                  key={`${section.slice_type}-${index}`}
                  content={section.primary.text_block}
                />
              )
            case 'single_image':
              return (
                <SingleImage
                  key={`${section.slice_type}-${index}`}
                  content={section.primary.image_1}
                />
              )
            case 'two_image_grid':
              return (
                <TwoImageGrid
                  key={`${section.slice_type}-${index}`}
                  content={section.primary}
                />
              )
            case 'three_image_grid':
              return (
                <ThreeImageGrid
                  key={`${section.slice_type}-${index}`}
                  content={section.primary}
                />
              )
            case 'video':
              return (
                <Video
                  key={`${section.slice_type}-${index}`}
                  content={section.primary}
                />
              )
            case 'unity':
              return (
                <Unity
                  key={`${section.slice_type}-${index}`}
                  content={section.primary}
                />
              )
            default:
              return null
          }
        })
      }
    </div>
  )
}

/*** CONTENT SECTIONS ***/
function TextBox({ content }) {

  const textBoxSerializer = (type, element, content, children, key) => {
    if (element.type === "heading3") {
      return <h4 key={key}>{children}</h4>
    } else if (element.type === "paragraph") {
      return <p key={key}>{children}</p>
    } else if (element.type === "hyperlink") {
      return <a key={key} href={element.data.url} target="_blank" rel="noopener noreferrer">{children}</a>
    } else {
      return null;
    }
  }

  return (
    <div className="text-box">
        <RichText render={content} htmlSerializer={textBoxSerializer} />
    </div>
  )
}

function Image({ image }) {
  return (
    <div className="image">
      <img src={image.url} alt={image.alt} />
      {image.alt && <span>{image.alt}</span>}
    </div>
  )
}

function SingleImage({ content }) {
  return (
    <div className="single-image">
      <Image image={content} />
    </div>
  )
}

function TwoImageGrid({ content }) {
  return (
    <div className="two-image-grid">
      <Image image={content.image_1} />
      <Image image={content.image_2} />
    </div>
  )
}

function ThreeImageGrid({ content }) {
  return (
    <div className="three-image-grid">
      <Image image={content.image_1} />
      <Image image={content.image_2} />
      <Image image={content.image_3} />
    </div>
  )
}

function Video({ content }) {
  return (
    <div className="video" dangerouslySetInnerHTML={{ __html: content.embed_link.html }} />
  )
}

function Unity({ content }) {
  const unity = useRef(null)
  const aspectRatio = content.aspect_ratio === "16:9" ? "widescreen" : "standard"

  useEffect(() => {
    unity.current.focus()
  }, [])

  return (
    <div className={`unity ${aspectRatio}`}>
      <p>This Unity project cannot be played on a mobile device. Please view this page on a computer.</p>
      <iframe ref={unity} src={content.unity_embed.url} title="Embedded Unity Project" />
    </div>
  )
}

export default ProjectContent
