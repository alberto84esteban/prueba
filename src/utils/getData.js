
import { ref } from 'vue'

const getData = () => {

  const data = ref(null)
  const error = ref(null)

  const load = async () => {

    try {
      let retData = await fetch('http://localhost:3000/movies')

      if (!retData.ok) {
        error.value = 'Ha habido un error'
      }

      data.value = await retData.json()

    } catch(err) {
      error.value = err.message
    }
  }

  return {data, error, load}
}

export default getData;