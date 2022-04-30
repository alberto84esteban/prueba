<template>
  <div>
    <AppHeader />
    <SideMenu v-if="showMenu" />
    <h1>{{t('hello')}}</h1>
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
import { useI18n } from 'vue-i18n'

export default {
  name: 'App',
  components: { AppHeader, SideMenu },

  setup() {
    const {t, locale} = useI18n();

    const store = useStore()
    const showMenu = computed(() => store.state.menuVisible)

    return { showMenu, t, locale }
  }
}
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,700&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

</style>
