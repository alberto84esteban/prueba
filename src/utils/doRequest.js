import { ref } from 'vue'
import axios from 'axios'
import { useStore } from 'vuex'

const doRequest = (path/*, params*/) => {

  const data = ref(null)
  const error = ref(false)
  const store = useStore();

  const load = async (showErrorOnWindow) => {

    try {
      let raw = await axios.get(`http://localhost:3000/${path}`)
      data.value = await raw.data;

    } catch (err) {

      //Devolvemos error por si queremos tratarlo de manera personalizada
      error.value = true

      //Lanzamos mensaje de error
      store.dispatch('setError', `${err.name} - ${err.message}`)
      store.commit('setShowErrorOnWindow', showErrorOnWindow)
    }
  }

  return { data, error, load }
}

export default doRequest;