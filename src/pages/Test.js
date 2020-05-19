import React, {useState} from 'react'

function Test() {

  const [selected, setSelected] = useState(false);

  return (
    <button 
      id="test" 
      className={selected ? "selected" : ""} 
      onClick={() => { setSelected((p) => !p)}}
    >
      PREVIOUS PROJECT
    </button>
  )
}

export default Test
