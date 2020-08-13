import React, { useContext } from 'react'
import { GlobalState } from '../App'

/* COMPONENTS */
import Subheader from './Subheader'
import EventsDateSection from './EventsDateSection'

function EventsShowcase() {

  const { state } = useContext(GlobalState);

  return (
    <div id="events-showcase">
      <Subheader page="events" />
      {
        state.events &&
        <div id="events-content">
          {
            (state.dateFilter === "august-27" || state.dateFilter === "all") &&
            <EventsDateSection
              date="THURSDAY, AUGUST 27"
              events={state.events.filter(event => new Date(event.data.timestamp.slice(0, 19)).getDate() === 27)}
            />
          }
          {
            (state.dateFilter === "august-28" || state.dateFilter === "all") &&
            <EventsDateSection
              date="FRIDAY, AUGUST 28"
              events={state.events.filter(event => new Date(event.data.timestamp.slice(0, 19)).getDate() === 28)}
            />
          }
          {
            (state.dateFilter === "august-29" || state.dateFilter === "all") &&
            <EventsDateSection
              date="SATURDAY, AUGUST 29"
              events={state.events.filter(event => new Date(event.data.timestamp.slice(0, 19)).getDate() === 29)}
            />
          }
        </div>
      }
    </div>
  )
}

export default EventsShowcase
