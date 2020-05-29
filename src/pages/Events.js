import React, { useContext } from 'react'
import { Context } from '../App'

/* components */
import EventsInfoModal from '../components/EventsInfoModal'
import EventsHero from '../components/EventsHero'
import EventsList from '../components/EventsList'

function Events() {

  const { state } = useContext(Context);

  console.log(state.currentModalEvent);


  return (
    <div id="events">
      { state.currentModalEvent && <EventsInfoModal event={state.curretModalEvent} /> }
      <EventsHero modalBlur={state.currentModalEvent ? true : false} />
      <EventsList modalBlur={state.currentModalEvent ? true : false} />
    </div>
  )
}

export default Events
