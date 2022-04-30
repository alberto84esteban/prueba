<template>
  <div>
    <AppHeader />
    <SideMenu v-if="showMenu" />
  </div>
  <div class="mt-[35px]">
    <router-view />
  </div>
</template>

<script>
import { computed } from 'vue'
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

</style>
