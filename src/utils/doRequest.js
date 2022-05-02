import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const doRequest = (path/*, params*/) => {

  const data = ref(null)
  const error = ref(null)
  const store = useStore();

  const load = async () => {

    try {

      console.log('get movie with axios!')
      //let rawData = await fetch(`http://localhost:3000/${path}`)
      let raw = await axios.get(`http://localhost:3000/dd${path}`)

      //data.value = await raw.json()
      data.value = await raw.data;

    } catch (err) {

      //Devolvemos el error por si queremos tratarlo de manera personalizada
      error.value = err.message

      //Lanzamos mensaje de error
      store.dispatch('setError', `${err.name} - ${err.message}`)
    }
  }

  return { data, error, load }
}

export default doRequest;