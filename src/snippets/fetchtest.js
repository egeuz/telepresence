import React, {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

const [text, setText] = useState("");

useEffect(() => {
  async function strapiFetchTest() {
    const response = await axios('https://majormajor-cms.herokuapp.com/tests');
    setText(response.data[0].testfield);
    console.log(text);
  }
  
  strapiFetchTest();

});

  return (
    <div></div>
  )
}

export default App;