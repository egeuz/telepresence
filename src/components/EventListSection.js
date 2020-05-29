import React, {useContext} from 'react'
import EventCard from './EventCard'
import {Context} from '../App'

import placeholder from '../assets/event-placeholder.png'

const data = {
  event_type: "WORKSHOP",
  event_image: placeholder,
  event_title: "PROTOTYPING",
  event_speaker: "Mia Meus",
  event_date: "June 11",
  event_time: "12–1PM"
}


function EventListSection({section, title}) {
  const {state} = useContext(Context)

  const setFilter = () => state.eventFilter === "all" || state.eventFilter === section ? "" : "hidden"

  return (
    <div className={`event-list-section ${setFilter()}`}>
    <p className="date">{title}</p>
    <div className="event-grid">
      <EventCard event={data} />
      <EventCard event={data} />
      <EventCard event={data} />
      <EventCard event={data} />
    </div>
    </div>
  )
}

export default EventListSection
