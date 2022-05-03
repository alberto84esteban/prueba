<template>
  <va-app-bar shadow-color='bg-slate-200' class="flex fixed z-[100]">
    <va-button v-if="menuButton" class="flex-none" icon="menu" color="#fff" flat :rounded="false" @click="handleClick" />
    <va-button v-else class="flex-none" icon="chevron_left" color="#fff" flat :rounded="false" @click="handleBack" />
    <div class="flex-1 text-center text-white mr-[36px]">
      <h2>{{ $t(title) }}</h2>
    </div>
  </va-app-bar>
</template>

<script>

import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { useI18n } from 'vue-i18n'

export default {
    components : {},
    setup() {

      const { t } = useI18n();
      const store = useStore();
      const router = useRouter();
      const menu = ref(false);
      const title = computed(() => store.state.title )
      const menuButton = computed(() => store.state.showMenuButton )

      const handleClick = () => {
        store.commit('changeMenuVisibility', true)
      }

      const handleBack = () => {
        router.back()
      }

      return { menu, title, handleClick, t, menuButton, handleBack, router }
        
    },
}
</script>
<style>

</style>