import React, {useContext} from 'react'
import {Context} from '../App'

import placeholder from '../assets/event-placeholder.png'

function EventCard({event}) {
  const {state, dispatch} = useContext(Context)

  const revealModal = () => {
    dispatch({type: 'open-event-modal', event: event})
  }

  return (
    <div className="event-card">
      <h5 className="event-type">{event.event_type}</h5>
      <img className="event-image" src={event.event_image} alt="a placeholder event visual" onClick={revealModal} />
      <div className="event-main">
        <h3 className="event-title">{event.event_title}</h3>
        <p className="event-speaker">{event.event_speaker}</p>
      </div>
      <div className="event-sub">
        <p className="event-date">{event.event_date}</p>
        <p className="event-time">{event.event_time}</p>
        <p className="more-info" onClick={revealModal}>more info</p>
      </div>
      <div className="event-attend">
        <button>ATTEND</button>
      </div>

    </div>
  )
}

export default EventCard
