import { ref } from 'vue'

const getMovie = () => {

  const data = ref(null)
  const error = ref(null)

  const load = async (id) => {

    try {
      let retData = await fetch(`http://localhost:3000/movies/${id}`)

      if (!retData.ok) {
        error.value = retData.statusText
      }

      data.value = await retData.json()

    } catch(err) {
      error.value = err.message
    }
  }

  return {data, error, load}
}

export default getMovie;