import axios from 'axios'

async function fetchData(path, callback) {
  const url = 'https://majormajor-cms.herokuapp.com' + path
  try {
    const response = await axios.get(url)
    callback(response.data)
  } catch (err) {
    console.log(err)
  }
  
  
}

export default fetchData;