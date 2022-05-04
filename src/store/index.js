import { createStore } from "vuex";

const store = createStore({
  state: {
    title: 'appTitle',
    menuVisible: false,
    menuSelected: null,
    showMenuButton: true,
    error: null,
    loading: false,
    showErrorOnWindow: false,
    showErrorToast: false,

    // Por si queremos hacerlo dinámico. Se usa en dos puntos, barra lateral y menú principal
    // Cualquier modificación, solo se deberá hacer aquí.
    menuItems: [
      {
        id: 1,
        name: 'movies',
        to: '/movies',
        icon: 'arrow'
      },
      {
        id: 2,
        name: 'actors',
        to: '/movies',
        icon: 'arrow'
      },
      {
        id: 3,
        name: 'companies',
        to: '/movies',
        icon: 'arrow'
      }
    ]
  },
  getters: {},
  mutations: {
    changeTitle(state, title) {
      state.title = title
    },

    changeMenuVisibility(state) {
      state.menuVisible = !state.menuVisible;
    },

    setSelected(state, id) {
      state.menuSelected = id;
    },

    setShowMenuButton(state, show) {
      state.showMenuButton = show;
    },

    setError(state, error) {
      state.error = error;
    },

    setLoading(state, value) {
      state.loading = value;
    },

    setShowErrorOnWindow(state, value) {
      state.showErrorOnWindow = value;
    },

    showErrorToast(state, value) {
      state.showErrorToast = value;
    },
  },
  actions: {
    setError(context, error/*, showErrorOnWindow*/) {

      // Informamos del mensaje de error
      context.commit('setError', error)

      // Eliminamos ya el indicativo de carga
      context.commit('setLoading', false)

      // Mostramos el pop-up con el error
      context.commit('showErrorToast', true)

      // Hacemos desaparecer la notificación pop-up a los 5 segundos
      setTimeout(() => {
        context.commit('showErrorToast', false)
      }, 5000)
    },

    /**
     * Eliminamos todos los valores de error/notificación 
     */
    cleanMessages(context) {
      context.commit('setError', null)
      context.commit('setLoading', false)
      context.commit('showErrorToast', false)
      context.commit('setShowErrorOnWindow', false)
      context.commit('setSelected', null)
    }
  }
});

export default store;