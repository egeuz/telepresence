import React, { useContext, useEffect } from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { RichText } from 'prismic-reactjs'
/* LOCAL MODULES */
import { GlobalState } from '../App'
/* ASSETS */
import closeX from '../Assets/Icons/closex.svg'

function EventModal({ event }) {
  const { dispatch } = useContext(GlobalState)
  const timestamp = new Date(event.timestamp.slice(0, 19));

  useEffect(() => {
    disableBodyScroll(document.getElementById("event-modal"));
    return () => enableBodyScroll(document.getElementById("event-modal")  );
  }, [])

  const descriptionSerializer = (type, element, content, children, key) => {
    if (element.type === "paragraph") {
      return <p className="event-description" key={key}>{children}</p>
    } else if (element.type === "hyperlink") {
      return <a key={key} href={element.data.url} target="_blank" rel="noopener noreferrer">{children}</a>
    } else {
      return null;
    }
  }

  const closeModal = (e) => {
    if (
      e.target.id === "event-modal" ||
      e.target.id === "modal-close" ||
      e.target.parentNode.id === "modal-close"
    )
      dispatch({ type: "set-modal-event", event: "" })
  }

  return (
    <div id="event-modal" onClick={closeModal}>
      <div id="modal-content">
        <button id="modal-close" onClick={closeModal}>
          <img src={closeX} onClick={closeModal} alt="Return to events page" />
        </button>
        <div>
          <img
            className="event-image"
            src={event.image.url} alt={event.image.alt}
          />
          <div className="event-details">
            <h5 className="event-type">{event.type}</h5>
            <h3 className="event-title">{RichText.asText(event.title)}</h3>
            <p className="event-speaker">{RichText.asText(event.speaker)}</p>
            <div className="event-date-time">
              <span>August {timestamp.getDate()}</span>
              <span>{timestamp.getHours() === 12 ? "12" : timestamp.getHours() % 12} {timestamp.getHours() / 12 >= 1 ? "PM" : "AM"}</span>
              <span>{event.duration} minutes</span>
              <br/>
              {
                event.hosted_on &&
                <span className="event-medium">Hosted on {event.hosted_on}</span>
              }
            </div>
            <RichText render={event.description} htmlSerializer={descriptionSerializer} />
            <a className="eventbrite-button" href={event.eventbrite_url.url} target="_blank" rel="noopener noreferrer">REGISTER HERE</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventModal
