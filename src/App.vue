<template>
  <div>
    <AppHeader />
    <SideMenu v-if="showMenu" />
  </div>
  <div class="content-container">
    <router-view />
  </div>
</template>

<script>
import { computed, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader'
import SideMenu from './components/SideMenu'

export default {
  name: 'App',
  components: { AppHeader, SideMenu },

  setup() {

    const store = useStore()
    const showMenu = computed(() => store.state.menuVisible)

    return { showMenu }
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
