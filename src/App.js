import React, {useState, useEffect} from 'react'
import axios from 'axios';

function App() {

  const [text, setText] = useState("");

  useEffect(() => {
    async function strapiFetchTest() {
      const response = await axios('https://majormajor-cms.herokuapp.com/tests');
      setText(response.data[0].testfield);
    }

    strapiFetchTest();

  });

  return (
    <div>
      {text}
      {text && " this is really exciting because we're pulling the hello world from the CMS wowowowowow"}
    </div>
  )
}

export default App
