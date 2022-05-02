import { createStore } from "vuex";

const store = createStore({
  state: {
    title: 'appTitle',
    menuVisible: false,
    menuSelected: -1,
    showMenuButton: true,
    error: null,
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
    }
  },
  actions: {
    setError(context, error) {
      context.commit('setError', error)
      setTimeout(() => {
        context.commit('setError', null)
      }, 5000)
    }
  }
});

export default store;