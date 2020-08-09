import React from 'react'
import EventCard from './EventCard'

function EventsDateSection({ date, events }) {

  return (
    <div className="events-date-section">
      <div className="poster">{date}</div>
      <div className="event-card-grid">
      {
        events
        .sort((a, b) => new Date(a.data.timestamp) - new Date(b.data.timestamp))
        .map(event => <EventCard key={event.id} event={event.data} />)
      }
      </div>
    </div>
  )
}

export default EventsDateSection
