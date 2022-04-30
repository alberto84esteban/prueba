<template>
  <va-app-bar shadow-color='bg-slate-200' class="flex fixed z-[100]">
    <va-button class="flex-none" icon="menu" color="#fff" flat :rounded="false" @click="handleClick" />
    <div class="flex-1 text-center text-white mr-[36px]">
      <h2>{{ $t(title) }}</h2>
    </div>
  </va-app-bar>
</template>

<script>

import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import { useI18n } from 'vue-i18n'

export default {
    components : {},
    setup() {

      const { t } = useI18n();
      const store = useStore();
      const menu = ref(false);
      const title = computed(() => store.state.title )

      const handleClick = () => {
        store.commit('changeMenuVisibility', true)
      }

      return { menu, title, handleClick, t }
        
    },
}
</script>
<style>

</style>