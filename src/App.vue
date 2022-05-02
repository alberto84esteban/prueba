<template>
  <div>
    <AppHeader />
    <SideMenu v-if="showMenu" />
  </div>
  <div class="mt-[35px]">
    <router-view />
  </div>
  <!-- Elemento usado en vez de Toast para mostrar error en el delete del registro-->
  <!--TODO: Poner el elemento a la altura de la aplicación para poder gestionarlo globalmente con el store -->
  <div class="absolute z-[150] top-[80vh] w-[100vw] drop-shadow-xl">
    <va-alert v-model="error" color="danger" class="mb-4 m-auto w-[60vw] h-[55px] drop-shadow-xl">
      <span class="w-full text-center"> {{ error }} </span>
    </va-alert>
  </div>
  <div v-if='loading' class="fixed w-full">
    <LoadingComponent />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader'
import SideMenu from './components/SideMenu'
import LoadingComponent from './components/LoadingComponent'

export default {
  name: 'App',
  components: { AppHeader, SideMenu, LoadingComponent },

  setup() {

    const store = useStore()
    const showMenu = computed(() => store.state.menuVisible)
    const error = computed(() => store.state.error)
    const loading = computed(() => store.state.loading)
    
    return { showMenu, error, loading }
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

</style>
