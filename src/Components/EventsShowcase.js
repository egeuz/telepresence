import React, { useContext } from 'react'
import { GlobalState } from '../App'
import useScroll from '../Hooks/useScroll'
import moment from 'moment'

/* COMPONENTS */
import Subheader from './Subheader'
import EventsDateSection from './EventsDateSection'

function EventsShowcase() {

  const { state } = useContext(GlobalState);
  const {scrollPosition} = useScroll()

  return (
    <div id="events-showcase" className={scrollPosition > window.innerHeight ? "offset" : "" }>
      <Subheader page="events" />
      {
        state.events &&
        <div id="events-content">
          {
            (state.dateFilter === "august-27" || state.dateFilter === "all") &&
            <EventsDateSection
              date="THURSDAY, AUGUST 27"
              events={state.events.filter(event => moment(event.data.timestamp).date() === 27)}
            />
          }
          {
            (state.dateFilter === "august-28" || state.dateFilter === "all") &&
            <EventsDateSection
              date="FRIDAY, AUGUST 28"
              events={state.events.filter(event => moment(event.data.timestamp).date() === 28)}
            />
          }
          {
            (state.dateFilter === "august-29" || state.dateFilter === "all") &&
            <EventsDateSection
              date="SATURDAY, AUGUST 29"
              events={state.events.filter(event => moment(event.data.timestamp).date() === 29)}
            />
          }
        </div>
      }
    </div>
  )
}

export default EventsShowcase
