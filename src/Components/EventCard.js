import React, { useContext } from 'react'
import { GlobalState } from '../App'
import { RichText } from 'prismic-reactjs'
import moment from 'moment'

function EventCard({ event }) {

  const {dispatch} = useContext(GlobalState)
  // const timestamp = new Date(event.timestamp.slice(0, 19));
  const timestamp = moment(event.timestamp)

  const openEvent = (e) => {
    dispatch({
      type: "set-modal-event", 
      event: event
    })
  }

  return (
    <div className="event-card">
      <h5 className="event-type">{event.type}</h5>
      <img onClick={openEvent} className="event-image" src={event.image.url} alt={event.image.alt} />
      <h3 onClick={openEvent} className="event-title">{RichText.asText(event.title)}</h3>
      <p className="event-speaker">{RichText.asText(event.speaker)}</p>
      <div className="event-cta">
        <div className="event-date-time">
          <span>{timestamp.format("MMM DD")}</span>
          <span>{timestamp.format("h")} {timestamp.format("A")}</span>
          <br/>
          <button onClick={openEvent} className="more-info">more info</button>
        </div>
        <a className="eventbrite-button" href={event.eventbrite_url.url} target="_blank" rel="noopener noreferrer">REGISTER</a>
      </div>
      
    </div>
  )
}

export default EventCard
