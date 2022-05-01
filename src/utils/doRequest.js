import { ref } from 'vue'
import axios from 'axios'

const doRequest = (path/*, params*/) => {

  const data = ref(null)
  const error = ref(null)

  const load = async () => {

    try {

      console.log('get movie with axios!')
      //let rawData = await fetch(`http://localhost:3000/${path}`)
      let raw = await axios.get(`http://localhost:3000/${path}`)

      if (raw.status != 200) {
        error.value = raw.statusText
      }

      //data.value = await raw.json()
      data.value = await raw.data;

    } catch(err) {
      error.value = err.message
    }
  }

  return {data, error, load}
}

export default doRequest;