import React from 'react'

/* components */
import Subheader from './Subheader'
import EventListSection from './EventListSection'

function EventsList({modalBlur}) {
  return (
    <div id="events-list" className={modalBlur ? "blur" : ""}>
      <Subheader page={"events"} />
      <EventListSection section="june-11" title="THURSDAY JUNE 11" />
      <EventListSection section="june-12" title="FRIDAY JUNE 12" />
      <EventListSection section="june-13" title="SATURDAY JUNE 13" />
      <EventListSection section="june-14" title="SUNDAY JUNE 14" />
    </div>
  )
}

export default EventsList
