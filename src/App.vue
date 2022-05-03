<template>
  <div>
    <AppHeader />
    <SideMenu v-if="showMenu" />
  </div>
  <div class="pt-[35px]">
    <router-view />
  </div>

  <!-- Sección para mostrar errores al usuario -->
  <div v-if='loading' class="fixed w-full">
    <LoadingComponent />
  </div>
  <div class="absolute z-[150] top-[80vh] w-[100vw] drop-shadow-xl">
    <va-alert v-model="showErrorToast" color="danger" class="mb-4 m-auto w-[60vw] h-[55px] drop-shadow-xl">
      <span class="w-full text-center"> {{ error }} </span>
    </va-alert>
  </div>
  <div v-if='showError'>
    <div class="border-1">
      <UserMessage type="danger" :title="$t('errorMsg')" :message="error" :outline="false" :backHome='true'/>
    </div> 
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import AppHeader from './components/AppHeader'
import SideMenu from './components/SideMenu'
import LoadingComponent from './components/LoadingComponent'
import UserMessage from './components/UserMessage'

export default {
  name: 'App',
  components: { AppHeader, SideMenu, LoadingComponent, UserMessage },

  setup() {

    const store = useStore()
    const showMenu = computed(() => store.state.menuVisible)
    const error = computed(() => store.state.error)
    const showErrorToast = computed(() => store.state.showErrorToast)
    const loading = computed(() => store.state.loading );
    const showError = computed(() => store.state.showErrorOnWindow)
    
    return { showMenu, error, loading, showError, showErrorToast }
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

</style>
