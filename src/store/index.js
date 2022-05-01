import { createStore } from "vuex";

const store = createStore({
    state:{
        title:'appTitle',
        menuVisible: false,
        menuSelected:-1,
        showMenuButton: true
    },
    getters:{},
    mutations:{
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
        }
    },
    actions:{
        setSelected(context, id, name) {
            context.commit('setSelected', id)
            context.commit('changeTitle', name)
        }
    }
});

export default store;