import React, { useContext } from 'react'
import { Context } from '../App'


function EventsInfoModal({ event }) {

  const { state, dispatch } = useContext(Context);

  const handleModalClose = () => {
    dispatch({ type: "close-event-modal" })
  }


  return (

    <div id="events-info-modal">
      <div id="modal-container">
        <button id="mobile-nav-close" onClick={handleModalClose}></button>
        <img id="modal-image" src={state.currentModalEvent.event_image} alt="placeholder" />
        <div id="modal-social-links"></div>
        <div id="modal-info">
          <h3>{state.currentModalEvent.event_speaker}</h3>
          <p>{state.currentModalEvent.event_title}</p>
          <span>{state.currentModalEvent.event_date}</span>
          <span>{state.currentModalEvent.event_time}</span>
        </div>
        <div id="modal-details"></div>
        <a>ATTEND</a>
      </div>

    </div>
  )
}

export default EventsInfoModal
